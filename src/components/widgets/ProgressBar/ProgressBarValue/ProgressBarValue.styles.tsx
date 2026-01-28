import { Progress } from "antd";
import styled, { keyframes, css } from "styled-components";

const indeterminateAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
`;

export const StyledProgress = styled(Progress)<{ $isIndeterminate?: boolean }>`
  .ant-progress-outer {
    margin-right: 0px;
    padding-right: 0px;
  }
  .ant-progress-text {
    display: none;
  }

  ${(props) =>
    props.$isIndeterminate &&
    css`
      .ant-progress-bg {
        width: 25% !important;
        animation: ${indeterminateAnimation} 1.5s ease-in-out infinite;
      }
    `}
`;
