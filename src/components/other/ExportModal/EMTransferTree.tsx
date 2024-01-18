import { Tree, Input, Col, Checkbox, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EMTitle } from "./EMTitle";
import { ExportField } from "./ExportModal.types";
import {
  flatten,
  generateLeftTree,
  generateRightTree,
} from "./exportModalHelper";
import { SearchOutlined } from "@ant-design/icons";
import { useLocale } from "@/context/LocaleContext";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

export type EMTransferLeftTreeProps = {
  mode: "left" | "right";
  targetKeys: string[];
  dataSource: ExportField[];
  onLoadData: (treeNode: any) => Promise<void>;
  onChange: ({
    selectedKeys,
    targetKeys,
  }: {
    selectedKeys: string[];
    targetKeys: string[];
  }) => void;
  selectedKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
  setTargetKeys: (keys: string[]) => void;
  isLoading?: boolean;
};

export const EMTransferTree = (props: EMTransferLeftTreeProps) => {
  const {
    targetKeys,
    dataSource,
    onLoadData,
    onChange,
    mode,
    selectedKeys,
    setSelectedKeys,
    setTargetKeys,
    isLoading = false,
  } = props;
  const [searchText, setSearchText] = useState<string>();
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [treeData, setTreeData] = useState<ExportField[]>([]);
  const treeDataMethod = mode === "left" ? generateLeftTree : generateRightTree;
  const { t } = useLocale();

  useEffect(() => {
    if (mode === "left") {
      const filteredSelectedKeys = selectedKeys.filter(
        (item) => !targetKeys.includes(item),
      );

      onChange?.({
        selectedKeys: filteredSelectedKeys,
        targetKeys,
      });
    } else {
      onChange?.({
        selectedKeys,
        targetKeys,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKeys, mode]);

  useEffect(() => {
    setTreeData(
      treeDataMethod({
        treeNodes: dataSource,
        targetKeys,
        searchText,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, targetKeys, searchText]);

  useEffect(() => {
    if (selectedKeys.length === 0) {
      setIndeterminate(false);
      setCheckAll(false);
    } else if (selectedKeys.length === targetKeys.length && mode === "left") {
      setIndeterminate(false);
      setCheckAll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeys]);

  useEffect(() => {
    if (targetKeys.length === 0) {
      setSelectedKeys([]);
      setIndeterminate(false);
      setCheckAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKeys]);

  const getAllFlattenItems = useCallback(() => {
    if (mode === "left") {
      return flatten(dataSource);
    }
    return flatten(dataSource).filter((item) => targetKeys.includes(item.key));
  }, [dataSource, mode, targetKeys]);

  const allKeys = [...targetKeys, ...selectedKeys];

  const onCheck = useCallback(
    ({ checked }: any) => {
      const newSelectedKeys = checked.filter((key: string) => {
        if (mode === "left") {
          return !targetKeys.includes(key);
        } else {
          return true;
        }
      });
      setSelectedKeys(newSelectedKeys);

      if (newSelectedKeys.length === getAllFlattenItems().length) {
        setCheckAll(true);
        setIndeterminate(false);
      } else if (newSelectedKeys.length > 0) {
        setIndeterminate(true);
        setCheckAll(false);
      } else {
        setIndeterminate(false);
        setCheckAll(false);
      }
    },
    [getAllFlattenItems, mode, setSelectedKeys, targetKeys],
  );

  const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value.trim() === "" ? undefined : value.trim());
  }, []);

  const onCheckAllChange = useCallback(
    (e: CheckboxChangeEvent) => {
      if (mode === "left") {
        setSelectedKeys(
          e.target.checked
            ? getAllFlattenItems()
                .filter((entry) => {
                  if (mode === "left") {
                    return !targetKeys.includes(entry.key);
                  } else {
                    return true;
                  }
                })
                .map((entry) => entry.key)
            : [],
        );
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      } else {
        setSelectedKeys(e.target.checked ? targetKeys : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      }
    },
    [mode, setSelectedKeys, getAllFlattenItems, targetKeys],
  );

  const onDropCallback = useCallback(
    (info: any) => {
      const { dragNode, dropPosition } = info;
      const { key } = dragNode;

      const newSelectedKeys = [...targetKeys];
      const index = newSelectedKeys.indexOf(key);
      if (index > -1) {
        newSelectedKeys.splice(index, 1);
      }
      if (dropPosition === -1) {
        newSelectedKeys.unshift(key);
      } else {
        newSelectedKeys.splice(dropPosition, 0, key);
      }
      setTargetKeys(newSelectedKeys);
    },
    [setTargetKeys, targetKeys],
  );

  const draggableProps =
    mode === "right"
      ? {
          className: "draggable-tree",
          draggable: true,
          onDrop: onDropCallback,
        }
      : {};

  return (
    <>
      <div className="ant-transfer-list-header">
        <Col flex={1}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            {selectedKeys.length > 0 ? `${selectedKeys.length}/` : ""}
            {`${flatten(treeData)?.length || 0} ${t("exportModalItemsUnit")}`}
          </Checkbox>
        </Col>
        <Col flex={1} style={{ textAlign: "right" }}>
          {mode === "left" ? t("availableFields") : t("fieldsToExport")}
        </Col>
      </div>
      <div className="ant-transfer-list-body ant-transfer-list-body-with-search">
        <div className="ant-transfer-list-body-search-wrapper">
          <Input
            style={{ marginBottom: 8 }}
            allowClear
            placeholder={t("searchPlaceholder")}
            onChange={onSearch}
            prefix={<SearchOutlined style={{ color: "#ccc" }} />}
          />
        </div>
        <div style={{ minHeight: 400 }}>
          {isLoading ? (
            <Spin />
          ) : (
            <Tree
              {...draggableProps}
              height={400}
              selectable={false}
              blockNode
              checkable
              checkStrictly
              checkedKeys={mode === "left" ? allKeys : selectedKeys}
              loadData={mode === "left" ? onLoadData : undefined}
              treeData={treeData}
              onCheck={onCheck}
              titleRender={(node) => <EMTitle node={node as ExportField} />}
            />
          )}
        </div>
      </div>
    </>
  );
};
