import { IMaskInput } from "react-imask";
import styled, { createGlobalStyle } from "styled-components";

export const DateMaskedInputPickerStyles = createGlobalStyle`
  .date-masked-input-picker-dropdown .ant-picker-footer {
    display: block !important;
  }
`;

export const InputWrapper = styled.div.attrs<{
  $required?: React.CSSProperties;
  $disabled?: boolean;
  $hasError?: boolean;
  $colorBgContainer?: string;
}>((props) => ({
  className: `ant-picker ant-picker-outlined${
    props.$disabled ? " ant-picker-disabled" : ""
  }${props.$hasError ? " ant-picker-status-error" : ""}`,
}))<{
  $required?: React.CSSProperties;
  $disabled?: boolean;
  $hasError?: boolean;
  $colorBgContainer?: string;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: ${(props) =>
    props.$required?.backgroundColor || props.$colorBgContainer};
  border-radius: 6px;
`;

export const StyledInput = styled(IMaskInput)<{
  $hasError?: boolean;
  $required?: React.CSSProperties;
  $isEmpty?: boolean;
  $placeholderColor?: string;
  $textColor?: string;
  $colorError?: string;
  $colorBorder?: string;
  $colorPrimary?: string;
  $colorErrorBg?: string;
  $colorPrimaryBg?: string;
  $colorTextDisabled?: string;
  $colorBgContainerDisabled?: string;
}>`
  flex: 1;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  font-size: 14px;
  line-height: 1.5715;
  color: ${(props) =>
    props.$isEmpty ? props.$placeholderColor : props.$textColor};
  background-color: transparent;
  border: 1px solid
    ${(props) => (props.$hasError ? props.$colorError : props.$colorBorder)};
  border-radius: 6px;
  transition: all 0.2s;
  font-family: inherit;

  &:focus {
    border-color: ${(props) =>
      props.$hasError ? props.$colorError : props.$colorPrimary};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$hasError ? props.$colorErrorBg : props.$colorPrimaryBg};
    outline: none;
  }

  &:hover {
    border-color: ${(props) =>
      props.$hasError ? props.$colorError : props.$colorPrimary};
  }

  &:disabled {
    color: ${(props) => props.$colorTextDisabled};
    background-color: ${(props) => props.$colorBgContainerDisabled};
    cursor: not-allowed;
  }
`;

const SuffixIcon = styled.span<{
  $allowClear?: boolean;
  $colorTextQuaternary?: string;
  $colorTextSecondary?: string;
}>`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.$colorTextQuaternary};
  cursor: ${(props) => (props.$allowClear ? "pointer" : "default")};
  transition:
    color 0.2s,
    opacity 0.2s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) =>
      props.$allowClear
        ? props.$colorTextSecondary
        : props.$colorTextQuaternary};
  }
`;

export const ClearIcon = styled(SuffixIcon)`
  opacity: 0;
`;

export const CalendarIcon = styled(SuffixIcon)`
  opacity: 1;
`;

export const InputContainer = styled.div.attrs({
  className: "ant-picker-input",
})`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;

  &:hover ${ClearIcon} {
    opacity: 1;
  }

  &:hover ${CalendarIcon} {
    opacity: 0;
    pointer-events: none;
  }
`;

export const HiddenPickerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  > .ant-picker {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    pointer-events: none;
  }

  .ant-picker-dropdown {
    visibility: visible;
  }
`;
