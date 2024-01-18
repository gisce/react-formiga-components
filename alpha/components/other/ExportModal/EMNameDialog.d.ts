/// <reference types="react" />
export type EMNameDialogProps = {
    visible: boolean;
    onCancel: () => void;
    onSave: (name: string) => Promise<void>;
};
export declare const EMNameDialog: import("react").MemoExoticComponent<(props: EMNameDialogProps) => import("react/jsx-runtime").JSX.Element>;
//# sourceMappingURL=EMNameDialog.d.ts.map