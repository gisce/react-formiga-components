import { Locale, tForLang } from "@/context";
import { Button, Transfer, Tree } from "antd";
import type {
  TransferDirection,
  TransferItem,
  TransferListProps,
} from "antd/es/transfer";
import type { DataNode } from "antd/es/tree";
import React from "react";

export type TreeTransferProps = {
  dataSource: DataNode[];
  targetKeys: string[];
  onChange: (
    targetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => void;
  locale: Locale;
};

// Customize Table Transfer
const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number
) => selectedKeys.includes(eventKey);

const generateTree = (
  treeNodes: DataNode[] = [],
  checkedKeys: string[] = []
): DataNode[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateTree(children, checkedKeys),
  }));

export const EMTransfer = ({
  dataSource,
  targetKeys,
  locale,
  ...restProps
}: TreeTransferProps) => {
  const transferDataSource: TransferItem[] = [];
  function flatten(list: DataNode[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as TransferItem);
      flatten(item.children);
    });
  }
  flatten(dataSource);

  return (
    <Transfer
      {...restProps}
      targetKeys={targetKeys}
      dataSource={transferDataSource}
      className="tree-transfer"
      render={(item) => item.title!}
      showSelectAll={true}
      titles={[
        tForLang("availableFields", locale),
        tForLang("fieldsToExport", locale),
      ]}
    >
      {({ direction, onItemSelect, selectedKeys }) => {
        if (direction === "left") {
          const checkedKeys = [...selectedKeys, ...targetKeys];
          return (
            <Tree
              blockNode
              checkable
              checkStrictly
              defaultExpandAll
              checkedKeys={checkedKeys}
              treeData={generateTree(dataSource, targetKeys)}
              onCheck={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(checkedKeys, key));
              }}
              onSelect={(_, { node: { key } }) => {
                onItemSelect(key as string, !isChecked(checkedKeys, key));
              }}
            />
          );
        }
      }}
    </Transfer>
  );
};
