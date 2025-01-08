import styled from "styled-components";

export const FieldSetElement = styled.fieldset<{ borderRadius?: string }>`
  padding: 0.5rem;
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji" !important;
`;

export const Legend = styled.legend`
  all: initial;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji";
  font-size: 0.85rem;
`;
