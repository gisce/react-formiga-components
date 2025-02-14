import { useLocale } from "@/context";
import { Col, Pagination, Row, Spin } from "antd";
import type { PaginationProps } from "antd";
import { useMemo, useState, useCallback, memo, useEffect } from "react";
import {
  SelectAllRecordsRow,
  shouldShowSelectionRow,
} from "../SelectAllRecordsRow/SelectAllRecordsRow";
import type { PaginationHeaderProps } from "./PaginationHeader.types";
import type { SelectAllRecordsRowProps } from "../SelectAllRecordsRow/SelectAllRecordsRow.types";

const PaginationHeaderComponent = (props: PaginationHeaderProps) => {
  const {
    total,
    page: pageProps,
    pageSize: pageSizeProps,
    currentPageSelectedCount,
    totalSelectedCount,
    onRequestPageChange,
    onSelectAllGlobalRecords,
    totalRowsLoading,
  } = props;

  const { t } = useLocale();

  const [page, setPage] = useState(pageProps);
  const [pageSize, setPageSize] = useState(pageSizeProps);

  useEffect(() => {
    setPage(pageProps);
  }, [pageProps]);

  useEffect(() => {
    setPageSize(pageSizeProps);
  }, [pageSizeProps]);

  const from = useMemo(() => (page - 1) * pageSize + 1, [page, pageSize]);
  const to = useMemo(
    () => Math.min(page * pageSize, total),
    [page, pageSize, total],
  );

  const handlePageChange = useCallback(
    (newPage: number, newPageSize?: number) => {
      setPage(newPage);
      if (newPageSize !== undefined) {
        setPageSize(newPageSize);
      }
      onRequestPageChange(newPage, newPageSize);
    },
    [onRequestPageChange],
  );

  const summary = useMemo(() => {
    if (total === undefined) return null;
    if (total === 0) return t("no_results");

    return t("summary")
      .replace("{from}", from?.toString())
      .replace("{to}", to?.toString())
      .replace("{total}", total?.toString());
  }, [total, from, to, t]);

  const paginationProps: PaginationProps = useMemo(
    () => ({
      total,
      pageSize,
      current: page,
      onChange: handlePageChange,
      showSizeChanger: true,
      showLessItems: true,
      locale: {
        items_per_page: t("items_per_page"),
      },
    }),
    [total, pageSize, page, handlePageChange, t],
  );

  const shouldShowSelectAllRecordsRow = useMemo(() => {
    if (!onSelectAllGlobalRecords) return false;
    return shouldShowSelectionRow({
      currentPageSelectedCount,
      currentPageSize: pageSize,
      totalRecordsCount: total,
      totalSelectedCount,
      currentPage: page,
    });
  }, [
    onSelectAllGlobalRecords,
    currentPageSelectedCount,
    pageSize,
    total,
    totalSelectedCount,
    page,
  ]);

  const selectAllRecordsProps: SelectAllRecordsRowProps = useMemo(
    () => ({
      shouldShow: shouldShowSelectAllRecordsRow,
      currentPageSelectedCount,
      totalRecordsCount: total,
      totalSelectedCount,
      onSelectAllRecords: onSelectAllGlobalRecords!,
    }),
    [
      shouldShowSelectAllRecordsRow,
      currentPageSelectedCount,
      total,
      totalSelectedCount,
      onSelectAllGlobalRecords,
    ],
  );

  const columnSpan = shouldShowSelectAllRecordsRow ? 8 : 12;

  return (
    <Row align="bottom" className="pb-4" wrap={false}>
      <Col span={columnSpan}>
        <Pagination {...paginationProps} />
      </Col>
      {shouldShowSelectAllRecordsRow && (
        <Col span={8} className="text-center">
          <SelectAllRecordsRow {...selectAllRecordsProps} />
        </Col>
      )}
      <Col span={columnSpan} className="text-right">
        {totalRowsLoading ? <Spin /> : summary}
      </Col>
    </Row>
  );
};

export const PaginationHeader = memo(PaginationHeaderComponent);
