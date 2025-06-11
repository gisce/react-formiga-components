import { theme } from "antd";
import { useMemo } from "react";

const { useToken } = theme;

export const useRequiredStyle = (required: boolean, readOnly: boolean) => {
  const { token } = useToken();

  return useMemo(
    () =>
      required && !readOnly
        ? { backgroundColor: token.colorPrimaryBg }
        : undefined,
    [required, readOnly, token.colorPrimaryBg],
  );
};
