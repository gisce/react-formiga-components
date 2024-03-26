import { ExportField } from "./ExportModal.types";
export type EMTransferLeftTreeProps = {
    mode: "left" | "right";
    targetKeys: string[];
    dataSource: ExportField[];
    onLoadData: (treeNode: any) => Promise<void>;
    onChange: ({ selectedKeys, targetKeys, }: {
        selectedKeys: string[];
        targetKeys: string[];
    }) => void;
    selectedKeys: string[];
    setSelectedKeys: (keys: string[]) => void;
    setTargetKeys: (keys: string[]) => void;
    isLoading?: boolean;
};
export declare const EMTransferTree: (props: EMTransferLeftTreeProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EMTransferTree.d.ts.map