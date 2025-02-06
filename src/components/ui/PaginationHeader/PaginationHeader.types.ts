export type PaginationHeaderProps = {
  initialPage: number;
  initialPageSize: number;
  total: number;
  realSelectedRowsLength: number;
  visibleSelectedRowsLength: number;
  onRequestPageChange: (page: number, pageSize?: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onSelectAllGlobalRecords: () => Promise<void>;
};
