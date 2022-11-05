import { Locale, tForLang } from "@/context";
import { Modal, Spin, Transfer as AntTransfer, Tree } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { EMTitle } from "./EMTitle";
import { ExportField } from "./ExportModal.types";
import {
  filterOption,
  flatten,
  generateLeftTree,
  generateRightTree,
  isChecked,
  updateTreeData,
} from "./exportModalHelper";
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

const TREE_HEIGHT = 300;
const Transfer = styled(AntTransfer)`
  .ant-transfer-list-body-customize-wrapper {
    min-height: ${TREE_HEIGHT}px;
  }
`;

export const EMTransfer = ({
  targetKeys,
  locale,
  onGetFields,
  onGetFieldChilds,
  onChange,
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

  const onSearch = useCallback((direction, value) => {
    if (direction === "left") {
      setLeftSearchText(value.trim() === "" ? undefined : value.trim());
    } else {
      setRightSearchText(value.trim() === "" ? undefined : value.trim());
    }
  }, []);

  const onCheck = useCallback(
    ({
      checkedKeys,
      onItemSelect,
    }: {
      checkedKeys: string[];
      onItemSelect: (key: string, check: boolean) => void;
    }) => {
      return (_, { node: { key } }) => {
        onItemSelect(key as string, !isChecked(checkedKeys, key));
      };
    },
    []
  );

  return (
    <Transfer
      {...restProps}
      showSearch
      targetKeys={targetKeys}
      dataSource={flatten(treeData!)}
      className="tree-transfer"
      render={(item) => item.title!}
      onChange={onChange}
      showSelectAll={true}
      locale={{
        itemUnit: tForLang("exportModalItemsUnit", locale),
        itemsUnit: tForLang("exportModalItemsUnit", locale),
        notFoundContent: tForLang("notFoundContent", locale),
        searchPlaceholder: tForLang("searchPlaceholder", locale),
      }}
      filterOption={filterOption}
      onSearch={onSearch}
      titles={[
        tForLang("availableFields", locale),
        tForLang("fieldsToExport", locale),
      ]}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
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

        if (direction === "left") {
          const checkedKeys = [...targetKeys, ...selectedKeys];

          return (
            <Tree
              height={TREE_HEIGHT}
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
              onCheck={onCheck({ checkedKeys, onItemSelect })}
              onSelect={onCheck({ checkedKeys, onItemSelect })}
              titleRender={(node) => (
                <EMTitle title={node.title} tooltip={node.tooltip} />
              )}
            />
          );
        } else {
          return (
            <Tree
              height={TREE_HEIGHT}
              blockNode
              checkable
              checkStrictly
              checkedKeys={selectedKeys}
              onCheck={onCheck({ checkedKeys: selectedKeys, onItemSelect })}
              onSelect={onCheck({ checkedKeys: selectedKeys, onItemSelect })}
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
