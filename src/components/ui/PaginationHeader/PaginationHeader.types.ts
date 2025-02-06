export type PaginationHeaderProps = {
  /** Total number of records across all pages */
  total: number;
  /** Initial page number */
  initialPage: number;
  /** Initial number of items per page */
  initialPageSize: number;
  /** Number of selected records in the current page */
  currentPageSelectedCount: number;
  /** Total number of selected records across all pages */
  totalSelectedCount: number;
  /** Callback when page or page size changes */
  onRequestPageChange: (page: number, pageSize?: number) => void;
  /** Callback when page size changes */
  onPageSizeChange: (pageSize: number) => void;
  /** Optional callback to select all records across all pages */
  onSelectAllGlobalRecords?: () => Promise<void>;
};
