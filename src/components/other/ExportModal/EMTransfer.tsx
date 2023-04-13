import { Locale } from "@/context";
import { Modal, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EMTransferWrapper } from "./EMTransferWrapper";
import { ExportField, PredefinedExportField } from "./ExportModal.types";
import {
  flatten,
  getTreeDataForOrphanTargetKeys,
  updateTreeData,
} from "./exportModalHelper";
const { error } = Modal;

export type EMTransferProps = {
  targetKeys: string[];
  onChange: (targetFields: PredefinedExportField[]) => void;
  locale: Locale;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => Promise<ExportField[]>;
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

  const onLoadMultipleKeys = useCallback(
    async (newKeys: string[]) => {
      const newTreeData = await getTreeDataForOrphanTargetKeys({
        treeData,
        targetKeys: newKeys,
        onGetFieldChilds,
      });
      setTreeData(newTreeData);
    },
    [treeData]
  );

  if (isLoading) {
    return <Spin />;
  }

  return (
    <EMTransferWrapper
      locale={locale}
      disabled={disabled}
      dataSource={treeData}
      onLoadData={onLoadData}
      targetKeys={targetKeys}
      onChange={onChange}
      onLoadMultipleKeys={onLoadMultipleKeys}
    />
  );
};
