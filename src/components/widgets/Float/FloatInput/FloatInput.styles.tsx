import styled from "styled-components";
import { InputNumber } from "antd";
import { RequiredFieldStyle } from "@/components";

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;
`;

export const StyledRequiredInputNumber = styled(StyledInputNumber)`
  ${RequiredFieldStyle}
`;
