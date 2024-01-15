import { Locale } from '../../../context';
import { PredefinedExport, PredefinedExportMandatoryId } from "./ExportModal.types";
export type EMPredefinedModalProps = {
    locale: Locale;
    visible: boolean;
    onCancel: () => void;
    onSelectPredefinedExport: (predefinedExport: PredefinedExport) => void;
    onGetPredefinedExports: () => Promise<PredefinedExportMandatoryId[]>;
    onRemovePredefinedExport: (predefinedExport: PredefinedExport) => Promise<void>;
};
export declare const EMPredefinedModal: ({ locale, visible, onCancel, onSelectPredefinedExport, onGetPredefinedExports, onRemovePredefinedExport, }: EMPredefinedModalProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EMPredefinedModal.d.ts.map