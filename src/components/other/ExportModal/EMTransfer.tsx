import { Locale } from "@/context";
import { Modal, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EMTransferWrapper } from "./EMTransferWrapper";
import { ExportField } from "./ExportModal.types";
import { flatten, updateTreeData } from "./exportModalHelper";
const { error } = Modal;

export type TreeTransferProps = {
  targetKeys: string[];
  onChange: (targetKeys: string[]) => void;
  locale: Locale;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => Promise<ExportField[]>;
};

export const EMTransfer = ({
  targetKeys,
  locale,
  onGetFields,
  onGetFieldChilds,
  onChange,
}: TreeTransferProps) => {
  const [treeData, setTreeData] = useState<ExportField[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchInitialItems();
  }, []);

  const fetchInitialItems = useCallback(async () => {
    setIsLoading(true);

    try {
      const initialItems = await onGetFields();
      setTreeData(initialItems);
    } catch (err) {
      console.error(err);
      error({
        title: "Error",
        centered: true,
        content: <>{JSON.stringify(err, null, 2)}</>,
      });
    }

    setIsLoading(false);
  }, []);

  const onLoadData = useCallback(
    async ({ key }: any) => {
      try {
        const item = flatten(treeData).find((item) => item.key === key);
        const childs = await onGetFieldChilds({
          key,
          title: item!.title,
        });
        const updatedTree = updateTreeData(treeData!, key, childs);
        setTreeData(updatedTree);
      } catch (err) {
        console.error(err);
        error({
          title: "Error",
          centered: true,
          content: <>{JSON.stringify(err, null, 2)}</>,
        });
      }
    },
    [treeData]
  );

  if (isLoading) {
    return <Spin />;
  }

  return (
    <EMTransferWrapper
      locale={locale}
      dataSource={treeData}
      onLoadData={onLoadData}
      targetKeys={targetKeys}
      onChange={onChange}
    />
  );
};
