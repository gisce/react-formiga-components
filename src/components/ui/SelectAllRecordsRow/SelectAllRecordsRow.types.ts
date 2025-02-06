export type SelectAllRecordsRowProps = {
  /** Number of records selected in the current page */
  currentPageSelectedCount: number;
  /** Size of the current page */
  currentPageSize: number;
  /** Total number of records across all pages */
  totalRecordsCount: number;
  /** Total number of selected records across all pages */
  totalSelectedCount: number;
  /** Callback to select all records across all pages */
  onSelectAllRecords: () => Promise<void>;
};
