import { Locale } from "@/context/LocaleContext";
import { Col, Row } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ExportField } from "./ExportModal.types";
import { EMTransferOperations } from "./EMTransferOperations";
import { EMTransferTree } from "./EMTransferTree";

export type EMTransferWrapperProps = {
  locale: Locale;
  targetKeys: string[];
  onChange: (targetKeys: string[]) => void;
  dataSource: ExportField[];
  onLoadData: (treeNode: any) => Promise<void>;
};

export const ColumnContainer = styled(Col)`
  padding: 0.5rem;
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  flex: 1;
`;

export const EMTransferWrapper = (props: EMTransferWrapperProps) => {
  const {
    targetKeys: targetKeysProps = [],
    dataSource,
    onLoadData,
    locale,
    onChange,
  } = props;

  const [targetKeys, setTargetKeys] = useState<string[]>(targetKeysProps);
  const [leftSelectedKeys, setLeftSelectedKeys] = useState<string[]>([]);
  const [rightSelectedKeys, setRightSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    onChange(targetKeys);
    setRightSelectedKeys(targetKeys);
  }, [targetKeys]);

  const toRight = useCallback(() => {
    const newTargetKeys = [...targetKeys, ...leftSelectedKeys];
    setTargetKeys(newTargetKeys);
    setLeftSelectedKeys([]);
  }, [leftSelectedKeys, targetKeys]);

  const toLeft = useCallback(() => {
    const newTargetKeys = targetKeys.filter(
      (key) => !rightSelectedKeys.includes(key)
    );
    setTargetKeys(newTargetKeys);
    setRightSelectedKeys([]);
  }, [rightSelectedKeys, targetKeys]);

  return (
    <Row style={{ height: 400 }}>
      <ColumnContainer>
        <EMTransferTree
          mode="left"
          locale={locale}
          targetKeys={targetKeys}
          dataSource={dataSource}
          onLoadData={onLoadData}
          onChange={setLeftSelectedKeys}
        />
      </ColumnContainer>
      <Col flex={0.05}>
        <EMTransferOperations
          toLeftDisabled={rightSelectedKeys.length === 0}
          toRightDisabled={leftSelectedKeys.length === 0}
          onToRight={toRight}
          onToLeft={toLeft}
        />
      </Col>
      <ColumnContainer>
        <EMTransferTree
          mode="right"
          locale={locale}
          targetKeys={targetKeys}
          dataSource={dataSource}
          onLoadData={onLoadData}
          onChange={setRightSelectedKeys}
        />
      </ColumnContainer>
    </Row>
  );
};
