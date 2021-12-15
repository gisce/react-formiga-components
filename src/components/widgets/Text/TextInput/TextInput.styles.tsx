import styled from "styled-components";
import { Input } from "antd";
import { TextAreaStyledProps } from "./TextInput.types";
import { RequiredFieldStyle } from "components/form/Field";
const { TextArea } = Input;

export const StyledTextArea = styled(TextArea)`
  height: ${(props: TextAreaStyledProps) => props.height} !important;
`;

export const StyledRequiredTextArea = styled(StyledTextArea)`
  ${RequiredFieldStyle}
`;
