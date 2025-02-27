export type SelectAllRecordsRowProps = {
  shouldShow: boolean;
  onSelectAllRecords: () => Promise<void>;
  currentPageSelectedCount: number;
  totalRecordsCount: number;
  totalSelectedCount: number;
};
