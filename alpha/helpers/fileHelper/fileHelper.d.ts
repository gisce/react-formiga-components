export declare function getFilesize(base64string: string): string;
export declare function getMimeType(base64string: string): Promise<import("file-type-buffer-browser").FileTypeResult | {
    mime: string;
    ext: string;
}>;
export declare const toBase64: (file: File) => Promise<string>;
export declare function openBase64InNewTab(data: string, mimeType: string): void;
export declare function downloadFile(value: string, filename?: string): Promise<void>;
//# sourceMappingURL=fileHelper.d.ts.map