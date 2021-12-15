import { Form, Row, Col } from "antd";
import styled, { css } from "styled-components";

export const StyledRow = styled(Row)`
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
`;

export const StyledCol = styled(Col)`
  margin-left: 0.5rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: 0;
`;

export const RequiredFieldStyle = css`
  --tw-bg-opacity: 1 !important;
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;

  .ant-input {
    background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;
  }
`;
