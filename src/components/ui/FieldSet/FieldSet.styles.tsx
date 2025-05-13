import styled from "styled-components";

export const FieldSetElement = styled.fieldset<{
  $borderRadius?: string;
  $backgroundColor?: string;
  $borderColor?: string;
}>`
  padding: 0.5rem;
  border-color: ${(props) => props.$borderColor || "#d9d9d9"};
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => props.$borderRadius || "5px"};
  background-color: ${(props) => props.$backgroundColor || "transparent"};
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
  padding: 0.25rem 0.75rem;
  margin: -0.5rem 0.75rem 0;
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
  background-color: white;
  border-radius: 4px;
`;
