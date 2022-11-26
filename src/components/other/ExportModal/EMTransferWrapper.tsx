import { Locale } from "@/context/LocaleContext";
import { Col, Row, Tree } from "antd";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { EMTitle } from "./EMTitle";
import { EMTransferLeftTree } from "./EMTransferLeftTree";
import { ExportField } from "./ExportModal.types";
import { generateLeftTree, isChecked } from "./exportModalHelper";

export type EMTransferWrapperProps = {
  locale: Locale;
  targetKeys: string[];
  // onChange: (targetKeys: string[]) => void;
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
  const { targetKeys, dataSource, onLoadData, locale } = props;

  return (
    <Row style={{ height: 400 }}>
      <ColumnContainer>
        <EMTransferLeftTree
          locale={locale}
          targetKeys={targetKeys}
          dataSource={dataSource}
          onLoadData={onLoadData}
        />
      </ColumnContainer>
      <Col flex={0.05}>mid</Col>
      <ColumnContainer>right</ColumnContainer>
    </Row>
  );
};
