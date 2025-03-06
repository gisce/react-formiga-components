import { useLocale } from "@/context";
import { Col, Pagination, Row, Spin, Typography } from "antd";
import type { PaginationProps } from "antd";
import { useMemo, useState, useCallback, memo, useEffect } from "react";
import {
  SelectAllRecordsRow,
  shouldShowSelectionRow,
} from "../SelectAllRecordsRow/SelectAllRecordsRow";
import type { PaginationHeaderProps } from "./PaginationHeader.types";
import type { SelectAllRecordsRowProps } from "../SelectAllRecordsRow/SelectAllRecordsRow.types";

const { Text } = Typography;
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
    customMiddleComponent,
    simpleSummary,
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
      showSizeChanger: true,
      showLessItems: true,
      locale: {
        items_per_page: t("items_per_page"),
      },
      pageSizeOptions: getPageSizeOptions(pageSize),
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

  // Standard paginated layout
  const sideColumnSpan =
    shouldShowSelectAllRecordsRow || customMiddleComponent ? 6 : 12;
  const middleColumnSpan =
    shouldShowSelectAllRecordsRow || customMiddleComponent ? 12 : 0;

  return (
    <Row align="bottom" className="pb-4" wrap={false}>
      <Col span={sideColumnSpan}>
        <Pagination {...paginationProps} />
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

const getPageSizeOptions = (max: number): number[] => {
  const options: number[] = [10, 20, 50, 100].filter((step) => step <= max);

  let last = options.length > 0 ? options[options.length - 1] : 10;
  while (last * 2 <= max) {
    last *= 2;
    options.push(last);
  }

  if (options[options.length - 1] < max) {
    options.push(max);
  }

  return options;
};

export const PaginationHeader = memo(PaginationHeaderComponent);
