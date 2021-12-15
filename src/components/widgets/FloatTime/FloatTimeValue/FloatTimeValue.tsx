import React from "react";
import { parseFloatToString } from "../FloatTimeInput/FloatTime.helper";

export const FloatTimeValue = ({ value = 0 }: { value?: number }) => {
  return <>{parseFloatToString(value)}</>;
};
