import { Tree, Input, Col, Checkbox } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EMTitle } from "./EMTitle";
import { ExportField } from "./ExportModal.types";
import {
  flatten,
  generateLeftTree,
  generateRightTree,
} from "./exportModalHelper";
import { SearchOutlined } from "@ant-design/icons";
import { Locale, tForLang } from "@/context/LocaleContext";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

export type EMTransferLeftTreeProps = {
  mode: "left" | "right";
  locale: Locale;
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
};

export const EMTransferTree = (props: EMTransferLeftTreeProps) => {
  const {
    targetKeys,
    dataSource,
    onLoadData,
    locale,
    onChange,
    mode,
    selectedKeys,
    setSelectedKeys,
    setTargetKeys,
  } = props;
  const [searchText, setSearchText] = useState<string>();
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (mode === "left") {
      const filteredSelectedKeys = selectedKeys.filter(
        (item) => !targetKeys.includes(item)
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
  }, [targetKeys, mode]);

  useEffect(() => {
    if (selectedKeys.length === 0) {
      setIndeterminate(false);
      setCheckAll(false);
    } else if (selectedKeys.length === targetKeys.length && mode === "left") {
      setIndeterminate(false);
      setCheckAll(true);
    }
  }, [selectedKeys]);

  useEffect(() => {
    if (targetKeys.length === 0) {
      setSelectedKeys([]);
      setIndeterminate(false);
      setCheckAll(false);
    }
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
    [getAllFlattenItems, targetKeys]
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
            : []
        );
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      } else {
        setSelectedKeys(e.target.checked ? targetKeys : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      }
    },
    [mode, targetKeys, getAllFlattenItems]
  );

  const onDropCallback = useCallback(
    (info) => {
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
    [targetKeys]
  );

  const treeDataMethod = mode === "left" ? generateLeftTree : generateRightTree;

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
            {`${getAllFlattenItems()?.length || 0} ${tForLang(
              "exportModalItemsUnit",
              locale
            )}`}
          </Checkbox>
        </Col>
        <Col flex={1} style={{ textAlign: "right" }}>
          {mode === "left"
            ? tForLang("availableFields", locale)
            : tForLang("fieldsToExport", locale)}
        </Col>
      </div>
      <div className="ant-transfer-list-body ant-transfer-list-body-with-search">
        <div className="ant-transfer-list-body-search-wrapper">
          <Input
            style={{ marginBottom: 8 }}
            allowClear
            placeholder={tForLang("searchPlaceholder", locale)}
            onChange={onSearch}
            prefix={<SearchOutlined style={{ color: "#ccc" }} />}
          />
        </div>
        <div className="ant-transfer-list-body-customize-wrapper">
          <Tree
            {...draggableProps}
            height={300}
            blockNode
            checkable
            checkStrictly
            checkedKeys={mode === "left" ? allKeys : selectedKeys}
            loadData={mode === "left" ? onLoadData : undefined}
            treeData={treeDataMethod({
              treeNodes: dataSource,
              targetKeys,
              searchText,
            })}
            onCheck={onCheck}
            titleRender={(node) => <EMTitle node={node as ExportField} />}
          />
        </div>
      </div>
    </>
  );
};
