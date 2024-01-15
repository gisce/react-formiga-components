import { Locale } from "@/context";
import { Modal, Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import { EMTransferWrapper } from "./EMTransferWrapper";
import { ExportField, PredefinedExportField } from "./ExportModal.types";
import { useExportModalContext } from "./ExportModalContext";
import { updateTreeData } from "./exportModalHelper";
const { error } = Modal;

export type EMTransferProps = {
  targetKeys: string[];
  onChange: (targetFields: PredefinedExportField[]) => void;
  locale: Locale;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: (key: string) => Promise<ExportField[]>;
  disabled?: boolean;
};

export const EMTransfer = ({
  targetKeys,
  locale,
  onGetFields,
  onGetFieldChilds,
  onChange,
  disabled = false,
}: EMTransferProps) => {
  const { dataSource, setDataSource } = useExportModalContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchInitialItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchInitialItems = useCallback(async () => {
    setIsLoading(true);

    try {
      const initialItems = await onGetFields();
      setDataSource(initialItems);
    } catch (err) {
      console.error(err);
      error({
        title: "Error",
        centered: true,
        content: <>{JSON.stringify(err, null, 2)}</>,
      });
    }

    setIsLoading(false);
  }, [onGetFields, setDataSource]);

  const onLoadData = useCallback(
    async ({ key }: any) => {
      try {
        const childs = await onGetFieldChilds(key);
        const updatedTree = updateTreeData(dataSource!, key, childs);
        setDataSource(updatedTree);
      } catch (err) {
        console.error(err);
        error({
          title: "Error",
          centered: true,
          content: <>{JSON.stringify(err, null, 2)}</>,
        });
      }
    },
    [dataSource, onGetFieldChilds, setDataSource],
  );

  if (isLoading) {
    return <Spin />;
  }

  return (
    <EMTransferWrapper
      locale={locale}
      disabled={disabled}
      dataSource={dataSource}
      onLoadData={onLoadData}
      targetKeys={targetKeys}
      onChange={onChange}
    />
  );
};
