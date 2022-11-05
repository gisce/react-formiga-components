import { Locale, tForLang } from "@/context";
import { Modal, Spin, Transfer as AntTransfer, Tree } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { EMTitle } from "./EMTitle";
import { ExportField } from "./ExportModal.types";
const { error } = Modal;

export type TreeTransferProps = {
  targetKeys: string[];
  onChange: (targetKeys: string[]) => void;
  locale: Locale;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => Promise<ExportField[]>;
};

const TreeHeight = 300;

const Transfer = styled(AntTransfer)`
  .ant-transfer-list-body-customize-wrapper {
    min-height: ${TreeHeight}px;
  }
`;

export const EMTransfer = ({
  targetKeys,
  locale,
  onGetFields,
  onGetFieldChilds,
  ...restProps
}: TreeTransferProps) => {
  const [treeData, setTreeData] = useState<ExportField[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [leftSearchText, setLeftSearchText] = useState<string>();
  const [rightSearchText, setRightSearchText] = useState<string>();

  useEffect(() => {
    fetchInitialItems();
  }, []);

  const fetchInitialItems = useCallback(async () => {
    setIsLoading(true);

    try {
      const initialItems = await onGetFields();
      setTreeData(initialItems);
    } catch (err) {
      console.error(err);
      error({
        title: "Error",
        centered: true,
        content: <>{JSON.stringify(err, null, 2)}</>,
      });
    }

    setIsLoading(false);
  }, []);

  const onLoadData = useCallback(
    async ({ key }: any) => {
      try {
        const item = flatten(treeData).find((item) => item.key === key);
        const childs = await onGetFieldChilds({
          key,
          title: item!.title,
        });
        setTreeData(updateTreeData(treeData!, key, childs));
      } catch (err) {
        console.error(err);
        error({
          title: "Error",
          centered: true,
          content: <>{JSON.stringify(err, null, 2)}</>,
        });
      }
    },
    [treeData]
  );

  return (
    <Transfer
      {...restProps}
      showSearch
      targetKeys={targetKeys}
      dataSource={flatten(treeData!)}
      className="tree-transfer"
      render={(item) => item.title!}
      showSelectAll={true}
      // onSearch={handleSearch}
      locale={{
        itemUnit: "item",
        itemsUnit: "items",
        notFoundContent: "The list is empty",
        searchPlaceholder: "Search here",
      }}
      filterOption={filterOption}
      onSearch={(direction, value) => {
        if (direction === "left") {
          setLeftSearchText(value.trim() === "" ? undefined : value.trim());
        } else {
          setRightSearchText(value.trim() === "" ? undefined : value.trim());
        }
      }}
      titles={[
        tForLang("availableFields", locale),
        tForLang("fieldsToExport", locale),
      ]}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === "left") {
          const checkedKeys = [...targetKeys, ...selectedKeys];

          if (isLoading) {
            return (
              <div
                style={{
                  display: "flex",
                  paddingTop: "2em",
                  justifyContent: "center",
                }}
              >
                <Spin />
              </div>
            );
          }

          return (
            <Tree
              height={300}
              blockNode
              checkable
              checkStrictly
              checkedKeys={checkedKeys}
              loadData={onLoadData}
              treeData={generateLeftTree({
                treeNodes: treeData,
                checkedKeys: targetKeys,
                searchText: leftSearchText,
              })}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(checkedKeys, key));
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(checkedKeys, key));
              }}
              titleRender={(node) => (
                <EMTitle title={node.title} tooltip={node.tooltip} />
              )}
            />
          );
        } else {
          return (
            <Tree
              height={300}
              blockNode
              checkable
              checkStrictly
              checkedKeys={selectedKeys}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(selectedKeys, key));
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(selectedKeys, key));
              }}
              treeData={generateRightTree({
                treeNodes: treeData,
                checkedKeys: targetKeys,
                searchText: rightSearchText,
              })}
              titleRender={(node) => (
                <EMTitle title={node.title} tooltip={node.tooltip} />
              )}
            />
          );
        }
      }}
    </Transfer>
  );
};

const filterOption = (inputValue: string, option: ExportField) =>
  option.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ||
  option.key.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;

const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number
) => selectedKeys.includes(eventKey);

const updateTreeData = (
  list: ExportField[],
  key: React.Key,
  children: ExportField[]
): ExportField[] =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });

const flatten = (dataSource: ExportField[]) => {
  const transferDataSource: ExportField[] = [];

  function innerFlatten(list: ExportField[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as ExportField);
      innerFlatten(item.children);
    });
  }

  innerFlatten(dataSource);
  return transferDataSource;
};

const generateLeftTree = ({
  treeNodes = [],
  checkedKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  checkedKeys: string[];
  searchText?: string;
}): ExportField[] => {
  if (searchText) {
    return flatten(treeNodes)
      .filter((item) => filterOption(searchText, item))
      .map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key as string),
        isLeaf: true,
        children: generateLeftTree({
          treeNodes: children,
          checkedKeys,
          searchText,
        }),
      }));
  }

  return treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateLeftTree({
      treeNodes: children,
      checkedKeys,
      searchText,
    }),
  }));
};

const generateRightTree = ({
  treeNodes = [],
  checkedKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  checkedKeys: string[];
  searchText?: string;
}): ExportField[] => {
  if (searchText) {
    return flatten(treeNodes)
      .filter((item) => filterOption(searchText, item))
      .map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key as string),
        isLeaf: true,
        children: generateRightTree({
          treeNodes: children,
          checkedKeys,
          searchText,
        }),
      }));
  }

  return flatten(treeNodes)
    .filter((node) => checkedKeys.indexOf(node.key) !== -1)
    .map(({ children, ...props }) => ({
      ...props,
      isLeaf: true,
      children: generateRightTree({
        treeNodes: children,
        checkedKeys,
        searchText,
      }),
    }));
};
