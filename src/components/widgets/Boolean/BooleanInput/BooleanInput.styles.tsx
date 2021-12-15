import { Checkbox as AntCheckbox } from "antd";
import styled from "styled-components";

export const RequiredCheckbox: any = styled(AntCheckbox)`
  .ant-checkbox-inner {
    background-color: #dbeafe;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #089cff;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;