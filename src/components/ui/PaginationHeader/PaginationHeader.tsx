import { useLocale } from "@/context";
import { Col, Pagination, Row } from "antd";
import type { PaginationProps } from "antd";
import { useMemo, useState, useCallback, memo } from "react";
import { SelectAllRecordsRow } from "../SelectAllRecordsRow/SelectAllRecordsRow";
import type { PaginationHeaderProps } from "./PaginationHeader.types";
import type { SelectAllRecordsRowProps } from "../SelectAllRecordsRow/SelectAllRecordsRow.types";

const PaginationHeaderComponent = (props: PaginationHeaderProps) => {
  const {
    total,
    initialPage,
    initialPageSize,
    currentPageSelectedCount,
    totalSelectedCount,
    onRequestPageChange,
    onPageSizeChange,
    onSelectAllGlobalRecords,
  } = props;

  const { t } = useLocale();

  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

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

  const handlePageSizeChange = useCallback(
    (newPageSize: number, newPage: number) => {
      setPageSize(newPageSize);
      setPage(newPage);
      onPageSizeChange(newPageSize);
      onRequestPageChange(newPage, newPageSize);
    },
    [onPageSizeChange, onRequestPageChange],
  );

  const mustShowSelectAllGlobalRecordsButton = useMemo(
    () => onSelectAllGlobalRecords !== undefined,
    [onSelectAllGlobalRecords],
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
      onShowSizeChange: handlePageSizeChange,
      showLessItems: true,
      locale: {
        items_per_page: t("items_per_page"),
      },
    }),
    [total, pageSize, page, handlePageChange, handlePageSizeChange, t],
  );

  const selectAllRecordsProps: SelectAllRecordsRowProps = useMemo(
    () => ({
      currentPageSelectedCount,
      currentPageTotalCount: pageSize,
      totalRecordsCount: total,
      totalSelectedCount,
      onSelectAllRecords: onSelectAllGlobalRecords!,
    }),
    [
      currentPageSelectedCount,
      pageSize,
      total,
      totalSelectedCount,
      onSelectAllGlobalRecords,
    ],
  );

  return (
    <Row align="bottom" className="pb-4" wrap={false}>
      <Col span={mustShowSelectAllGlobalRecordsButton ? 8 : 12}>
        <Pagination {...paginationProps} />
      </Col>
      {mustShowSelectAllGlobalRecordsButton && (
        <Col span={8} className="text-center">
          <SelectAllRecordsRow {...selectAllRecordsProps} />
        </Col>
      )}
      <Col
        span={mustShowSelectAllGlobalRecordsButton ? 8 : 12}
        className="text-right"
      >
        {summary}
      </Col>
    </Row>
  );
};

export const PaginationHeader = memo(PaginationHeaderComponent);
