import { useLocale } from "@/context";
import { Col, Pagination, Row } from "antd";
import { useMemo, useState } from "react";
import { SelectAllRecordsRow } from "../SelectAllRecordsRow/SelectAllRecordsRow";
import type { PaginationHeaderProps } from "./PaginationHeader.types";

const PaginationHeaderComp = (props: PaginationHeaderProps) => {
  const {
    total,
    initialPage,
    onRequestPageChange,
    onSelectAllGlobalRecords,
    initialPageSize,
    onPageSizeChange,
    realSelectedRowsLength,
    visibleSelectedRowsLength,
  } = props;

  const { t } = useLocale();

  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const from = useMemo(() => (page - 1) * pageSize + 1, [page, pageSize]);
  const to = useMemo(
    () => Math.min(page * pageSize, total),
    [page, pageSize, total],
  );

  const handlePageChange = (newPage: number, newPageSize?: number) => {
    setPage(newPage);
    if (newPageSize !== undefined) {
      setPageSize(newPageSize);
    }
    onRequestPageChange(newPage, newPageSize);
  };

  const handlePageSizeChange = (newPageSize: number, newPage: number) => {
    setPageSize(newPageSize);
    setPage(newPage);
    onPageSizeChange(newPageSize);
    onRequestPageChange(newPage, newPageSize);
  };

  const mustShowSelectAllGlobalRecordsButton =
    onSelectAllGlobalRecords !== undefined;

  const summary = useMemo(() => {
    return total === undefined
      ? null
      : total === 0
      ? t("no_results")
      : t("summary")
          .replace("{from}", from?.toString())
          .replace("{to}", to?.toString())
          .replace("{total}", total?.toString());
  }, [total, from, to, t]);

  return (
    <Row align="bottom" className="pb-4">
      <Col span={mustShowSelectAllGlobalRecordsButton ? 8 : 12}>
        <Pagination
          total={total}
          pageSize={pageSize}
          current={page}
          onChange={handlePageChange}
          showSizeChanger
          onShowSizeChange={handlePageSizeChange}
        />
      </Col>
      {mustShowSelectAllGlobalRecordsButton && (
        <Col span={8} className="text-center">
          <SelectAllRecordsRow
            numberOfVisibleSelectedRows={visibleSelectedRowsLength}
            numberOfRealSelectedRows={realSelectedRowsLength}
            numberOfTotalRows={total}
            totalRecords={total || 0}
            onSelectAllRecords={onSelectAllGlobalRecords}
          />
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

export const PaginationHeader = PaginationHeaderComp;
