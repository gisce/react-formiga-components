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
import { CustomPageSizeOptions } from "../CustomPageSizeOptions";

const PaginationHeaderComponent = (props: PaginationHeaderProps) => {
  const {
    total,
    page: pageProps,
    pageSize: pageSizeProps,
    maxPageSize,
    currentPageSelectedCount,
    totalSelectedCount,
    onRequestPageChange,
    onSelectAllGlobalRecords,
    totalRowsLoading,
    customMiddleComponent,
    simpleSummary,
    showAllOptionInPageSizeOptions = false,
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
    (newPage: number) => {
      setPage(newPage);
      onRequestPageChange(newPage, pageSize);
    },
    [onRequestPageChange, pageSize],
  );

  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      setPageSize(newPageSize);
      // When changing page size, reset to first page
      setPage(1);
      onRequestPageChange(1, newPageSize);
    },
    [onRequestPageChange],
  );

  const summary = useMemo(() => {
    if (total === undefined) return null;
    if (total === 0) return t("no_results");

    if (simpleSummary) {
      return t("simpleSummary").replace("{total}", total?.toString());
    }

    return t("summary")
      .replace("{from}", from?.toString())
      .replace("{to}", to?.toString())
      .replace("{total}", total?.toString());
  }, [total, t, simpleSummary, from, to]);

  const paginationProps: PaginationProps = useMemo(
    () => ({
      total,
      pageSize,
      current: page,
      onChange: handlePageChange,
      showLessItems: true,
      showSizeChanger: false, // We're using our custom component instead
    }),
    [total, pageSize, page, handlePageChange],
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

  // Standard paginated layout
  const sideColumnSpan =
    shouldShowSelectAllRecordsRow || customMiddleComponent ? 6 : 12;
  const middleColumnSpan =
    shouldShowSelectAllRecordsRow || customMiddleComponent ? 12 : 0;

  return (
    <Row align="bottom" className="pb-4" wrap={false}>
      <Col span={sideColumnSpan} className="flex items-center gap-2">
        <Pagination {...paginationProps} />
        <CustomPageSizeOptions
          pageSize={pageSize}
          maxPageSize={maxPageSize}
          onChange={handlePageSizeChange}
          itemsPerPageText={t("items_per_page")}
          showAllOption={showAllOptionInPageSizeOptions}
          allOptionText={t("all")}
        />
      </Col>
      {(shouldShowSelectAllRecordsRow || customMiddleComponent) && (
        <Col span={middleColumnSpan} className="text-center">
          {shouldShowSelectAllRecordsRow ? (
            <SelectAllRecordsRow {...selectAllRecordsProps} />
          ) : (
            customMiddleComponent
          )}
        </Col>
      )}
      <Col span={sideColumnSpan} className="text-right">
        {totalRowsLoading ? <Spin /> : summary}
      </Col>
    </Row>
  );
};

export const PaginationHeader = memo(PaginationHeaderComponent);
