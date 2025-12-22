import { DateMode } from "../helpers/DatePicker.helpers";
type UseDatePickerHandlersParams = {
    mode: DateMode;
    showTime?: boolean;
    onChange?: (value: string | null | undefined) => void;
};
export declare const useDatePickerHandlers: ({ mode, showTime, onChange, }: UseDatePickerHandlersParams) => {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleDoubleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};
export {};
//# sourceMappingURL=useDatePickerHandlers.d.ts.map