/// <reference types="react" />
import type { SelectAllRecordsRowProps } from "./SelectAllRecordsRow.types";
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const shouldShowSelectionRow: ({ currentPageSelectedCount, currentPageSize, totalRecordsCount, totalSelectedCount, currentPage, }: {
    currentPageSelectedCount: number;
    currentPageSize: number;
    totalRecordsCount: number;
    totalSelectedCount: number;
    currentPage: number;
}) => boolean;
export declare const SelectAllRecordsRow: import("react").MemoExoticComponent<(props: SelectAllRecordsRowProps) => import("react/jsx-runtime").JSX.Element | null>;
//# sourceMappingURL=SelectAllRecordsRow.d.ts.map