export type SelectAllRecordsRowProps = {
  numberOfVisibleSelectedRows: number;
  totalRecords: number;
  numberOfTotalRows: number;
  numberOfRealSelectedRows: number;
  onSelectAllRecords: () => Promise<void>;
};
