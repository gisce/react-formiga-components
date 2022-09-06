import styled from "styled-components";
import { RequiredFieldStyle } from "@/components/form/Field";
import { Input as AntInput } from "antd";

export const Input = styled(AntInput)`
  width: 100%;
`;

export const RequiredInput = styled(Input)`
  ${RequiredFieldStyle}
`;
