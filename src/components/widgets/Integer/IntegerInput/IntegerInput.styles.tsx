import styled from "styled-components";
import { RequiredFieldStyle } from "@/components/form/Field";
import { InputNumber } from "antd";

export const RequiredInput = styled(InputNumber)`
  ${RequiredFieldStyle}
`;
