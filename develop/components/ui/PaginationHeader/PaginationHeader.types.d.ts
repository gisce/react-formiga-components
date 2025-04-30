/// <reference types="react" />
export type PaginationHeaderProps = {
    /** Total number of records across all pages */
    total: number;
    /** Initial page number */
    page: number;
    /** Current number of items per page */
    pageSize: number;
    /** Maximum number of items per page */
    maxPageSize: number;
    /** Number of selected records in the current page */
    currentPageSelectedCount: number;
    /** Total number of selected records across all pages */
    totalSelectedCount: number;
    /** Callback when page or page size changes */
    onRequestPageChange: (page: number, pageSize?: number) => void;
    /** Optional callback to select all records across all pages */
    onSelectAllGlobalRecords?: () => Promise<void>;
    /** Whether the total number of rows is loading */
    totalRowsLoading: boolean;
    /** Optional custom component to display in the middle column */
    customMiddleComponent?: React.ReactNode;
    /** Whether to display a simple summary */
    simpleSummary?: boolean;
    /** Whether to show the "All" option in the page size options */
    showAllOptionInPageSizeOptions?: boolean;
};
//# sourceMappingURL=PaginationHeader.types.d.ts.map