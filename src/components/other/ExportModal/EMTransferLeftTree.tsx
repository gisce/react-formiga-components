import { Tree, Input, Row, Col, Checkbox } from "antd";
import React, { useCallback, useState } from "react";
import { EMTitle } from "./EMTitle";
import { ExportField } from "./ExportModal.types";
import { flatten, generateLeftTree } from "./exportModalHelper";
import { SearchOutlined } from "@ant-design/icons";
import { Locale, tForLang } from "@/context/LocaleContext";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useMemo } from "@storybook/addons";

export type EMTransferLeftTreeProps = {
  locale: Locale;
  targetKeys: string[];
  dataSource: ExportField[];
  onLoadData: (treeNode: any) => Promise<void>;
};

export const EMTransferLeftTree = (props: EMTransferLeftTreeProps) => {
  const { targetKeys, dataSource, onLoadData, locale } = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const getFlatDatasource = useCallback(
    () => flatten(dataSource),
    [dataSource]
  );

  const checkedKeys = [...targetKeys, ...selectedKeys];

  const onCheck = useCallback(
    ({ checked }: any) => {
      const newSelectedKeys = checked.filter(
        (key: string) => !targetKeys.includes(key)
      );
      setSelectedKeys(newSelectedKeys);

      if (newSelectedKeys.length === getFlatDatasource().length) {
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
    [getFlatDatasource, targetKeys]
  );

  const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value.trim() === "" ? undefined : value.trim());
  }, []);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setSelectedKeys(
      e.target.checked
        ? getFlatDatasource()
            .filter((entry) => !targetKeys.includes(entry.key))
            .map((entry) => entry.key)
        : []
    );
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

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
            {`${getFlatDatasource()?.length || 0} ${tForLang(
              "exportModalItemsUnit",
              locale
            )}`}
          </Checkbox>
        </Col>
        <Col flex={1} style={{ textAlign: "right" }}>
          {tForLang("availableFields", locale)}
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
            height={300}
            blockNode
            checkable
            checkStrictly
            checkedKeys={checkedKeys}
            loadData={onLoadData}
            treeData={generateLeftTree({
              treeNodes: dataSource,
              checkedKeys: targetKeys,
              searchText: searchText,
            })}
            onCheck={onCheck}
            titleRender={(node) => <EMTitle node={node as ExportField} />}
          />
        </div>
      </div>
    </>
  );
};
