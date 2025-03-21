/// <reference types="react" />
export interface CustomPageSizeOption<T> {
    value: T;
    label: string;
}
export interface CustomPageSizeOptionsProps {
    /** The currently selected page size */
    pageSize?: number;
    /** Maximum page size allowed */
    maxPageSize: number;
    /** Whether to show the "All" option */
    showAllOption?: boolean;
    /** Text to be shown for the "All" option */
    allOptionText?: string;
    /** Text to be appended to each number (e.g. "/ pàg.") */
    itemsPerPageText?: string;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Additional class name */
    className?: string;
    /** Custom styles */
    style?: React.CSSProperties;
    /** Callback fired when the value changes */
    onChange?: (value: number) => void;
}
//# sourceMappingURL=CustomPageSizeOptions.types.d.ts.map