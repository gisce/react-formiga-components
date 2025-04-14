import { Col, Row } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { ExportField, PredefinedExportField } from "./ExportModal.types";
import { EMTransferOperations } from "./EMTransferOperations";
import { EMTransferTree } from "./EMTransferTree";
import { flatten } from "./exportModalHelper";
import { useDeepCompareEffect } from "use-deep-compare";

export type EMTransferWrapperProps = {
  targetKeys: string[];
  onChange: (targetFields: PredefinedExportField[]) => void;
  dataSource: ExportField[];
  onLoadData: (treeNode: any) => Promise<void>;
  disabled?: boolean;
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
    onChange,
    disabled = false,
  } = props;

  const [targetKeys, setTargetKeys] = useState<string[]>(targetKeysProps);
  const [leftSelectedKeys, setLeftSelectedKeys] = useState<string[]>([]);
  const [rightSelectedKeys, setRightSelectedKeys] = useState<string[]>([]);

  useDeepCompareEffect(() => {
    onChange(
      targetKeys.map((key) => ({
        key,
        title: flatten(dataSource).find((item) => item.key === key)?.title,
      })),
    );
  }, [targetKeys, dataSource]);

  useDeepCompareEffect(() => {
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
      (key) => !rightSelectedKeys.includes(key),
    );
    setTargetKeys(newTargetKeys);
    setRightSelectedKeys([]);
  }, [rightSelectedKeys, targetKeys]);

  const onChangeLeft = useCallback(
    ({ selectedKeys }: { selectedKeys: string[] }) => {
      setLeftSelectedKeys(selectedKeys);
    },
    [targetKeys],
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
    [],
  );

  const onSetLeftSelectedKeys = useCallback(
    (keys: string[]) => {
      setLeftSelectedKeys(keys.filter((key) => !targetKeys.includes(key)));
    },
    [targetKeys],
  );

  const onSetRightSelectedKeys = useCallback(
    (keys: string[]) => {
      setRightSelectedKeys(keys);
    },
    [targetKeys],
  );

  return (
    <Row>
      <ColumnContainer>
        <EMTransferTree
          mode="left"
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
          disabled={disabled}
        />
      </Col>
      <ColumnContainer>
        <EMTransferTree
          mode="right"
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
