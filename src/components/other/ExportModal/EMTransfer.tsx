import { Locale, tForLang } from "@/context";
import { Modal, Spin, Transfer, Tree } from "antd";
import type { TransferItem } from "antd/es/transfer";
import React, { useCallback, useEffect, useState } from "react";
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

const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number
) => selectedKeys.includes(eventKey);

const generateTree = (
  treeNodes: ExportField[] = [],
  checkedKeys: string[] = []
): ExportField[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateTree(children, checkedKeys),
  }));

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
  const transferDataSource: TransferItem[] = [];

  function innerFlatten(list: ExportField[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as TransferItem);
      innerFlatten(item.children);
    });
  }

  innerFlatten(dataSource);
  return transferDataSource;
};

export const EMTransfer = ({
  targetKeys,
  locale,
  onGetFields,
  onGetFieldChilds,
  ...restProps
}: TreeTransferProps) => {
  const [treeData, setTreeData] = useState<ExportField[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        console.log("On load data: " + key);
        console.log("Treedata: " + JSON.stringify(treeData, null, 2));
        const item = flatten(treeData).find((item) => item.key === key);
        console.log("On load data item: " + item);
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
      titles={[
        tForLang("availableFields", locale),
        tForLang("fieldsToExport", locale),
      ]}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        // if (direction === "left") {
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
            treeData={generateTree(treeData, targetKeys)}
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
        // }
      }}
    </Transfer>
  );
};
