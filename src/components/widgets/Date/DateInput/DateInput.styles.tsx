import styled from "styled-components";
import { RequiredFieldStyle } from "components/form/Field";
import { DatePicker } from "antd";

export const RequiredDatePicker = styled(DatePicker)`
  ${RequiredFieldStyle}
`;