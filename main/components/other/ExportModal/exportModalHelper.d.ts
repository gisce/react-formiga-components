import { ExportField } from "./ExportModal.types";
export declare const filterOption: (inputValue: string, option: ExportField) => boolean;
export declare const isChecked: (selectedKeys: Array<string | number>, eventKey: string | number) => boolean;
export declare const updateTreeData: (list: ExportField[], key: React.Key, children: ExportField[]) => ExportField[];
export declare const flatten: (dataSource: ExportField[]) => ExportField[];
export declare const generateLeftTree: ({ treeNodes, targetKeys, searchText, }: {
    treeNodes: ExportField[];
    targetKeys: string[];
    searchText?: string | undefined;
}) => ExportField[];
export declare const generateRightTree: ({ treeNodes, targetKeys, searchText, }: {
    treeNodes: ExportField[];
    targetKeys: string[];
    searchText?: string | undefined;
}) => ExportField[];
export declare const getParentKeys: (key: string) => string[];
//# sourceMappingURL=exportModalHelper.d.ts.map