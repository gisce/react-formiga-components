import { Dayjs } from "dayjs";
export type DateMode = "date" | "time";
export declare const DatePickerConfig: {
    readonly date: {
        readonly placeholder: "__/__/____";
        readonly dateDisplayFormat: "DD/MM/YYYY";
        readonly dateInternalFormat: "YYYY-MM-DD";
    };
    readonly time: {
        readonly placeholder: "__/__/____ __:__:__";
        readonly dateDisplayFormat: "DD/MM/YYYY HH:mm:ss";
        readonly dateInternalFormat: "YYYY-MM-DD HH:mm:ss";
    };
};
export type DateTimePatterns = {
    day: RegExp;
    dayMonth: RegExp;
    fullDate: RegExp;
    withHours: RegExp;
    withMinutes: RegExp;
    withSeconds: RegExp;
};
export declare const createFormatRegex: (format: string) => RegExp;
export declare const createDateTimePatterns: () => DateTimePatterns;
type UpdateDateTimeParams = {
    currentValue: string | undefined;
    now: Dayjs;
    mode: DateMode;
    showTime: boolean;
    onChange: (value: string) => void;
};
export declare const updateDateTime: (params: UpdateDateTimeParams) => void;
export declare const shouldHandleEnter: (currentValue: string, showTime: boolean) => boolean;
export declare const parseDateSafely: (value: string, format: string, timezone?: string) => Dayjs | null;
export {};
//# sourceMappingURL=DatePicker.helpers.d.ts.map