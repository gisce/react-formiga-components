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
  }, [targetKeys]);

  useEffect(() => {
    setTargetKeys(targetKeysProps);
  }, [targetKeysProps]);

  const toRight = useCallback(() => {
    const newTargetKeys = [
      ...targetKeys,
      ...leftSelectedKeys.filter((key) => !targetKeys.includes(key)),
    ];
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

  const onChangeLeft = useCallback(
    ({ selectedKeys }: { selectedKeys: string[] }) => {
      setLeftSelectedKeys(selectedKeys);
    },
    [targetKeys]
  );

  const onChangeRight = useCallback(
    ({
      selectedKeys,
      targetKeys,
    }: {
      selectedKeys: string[];
      targetKeys: string[];
    }) => {
      setRightSelectedKeys(selectedKeys);
      setTargetKeys(targetKeys);
    },
    []
  );

  const onSetLeftSelectedKeys = useCallback(
    (keys: string[]) => {
      setLeftSelectedKeys(keys.filter((key) => !targetKeys.includes(key)));
    },
    [targetKeys]
  );

  const onSetRightSelectedKeys = useCallback(
    (keys: string[]) => {
      setRightSelectedKeys(keys);
    },
    [targetKeys]
  );

  return (
    <Row>
      <ColumnContainer>
        <EMTransferTree
          mode="left"
          locale={locale}
          targetKeys={targetKeys}
          dataSource={dataSource}
          onLoadData={onLoadData}
          onChange={onChangeLeft}
          selectedKeys={leftSelectedKeys}
          setSelectedKeys={onSetLeftSelectedKeys}
          setTargetKeys={setTargetKeys}
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
          onChange={onChangeRight}
          selectedKeys={rightSelectedKeys}
          setSelectedKeys={onSetRightSelectedKeys}
          setTargetKeys={setTargetKeys}
        />
      </ColumnContainer>
    </Row>
  );
};
