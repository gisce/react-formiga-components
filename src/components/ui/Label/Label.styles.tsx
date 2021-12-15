import styled from "styled-components";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { LabelContainerProps } from "./Label.types";

const alignClass = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  justify-content: ${(props: LabelContainerProps) => alignClass[props.align]};
`;

export const TooltipIcon = styled(QuestionCircleOutlined)`
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
  padding-right: 0.25rem;
`;

export const Text = styled.span`
  padding-right: 0.5rem;
  text-align: right;
`;
