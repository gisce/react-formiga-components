export type SelectAllRecordsRowProps = {
  /** Number of records selected in the current page */
  currentPageSelectedCount: number;
  /** Total number of records in the current page */
  currentPageTotalCount: number;
  /** Total number of records across all pages */
  totalRecordsCount: number;
  /** Total number of records selected across all pages */
  totalSelectedCount: number;
  /** Callback to select all records across all pages */
  onSelectAllRecords: () => Promise<void>;
};
