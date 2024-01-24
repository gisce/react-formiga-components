import { DropdownMenuGroup, DropdownMenuItem } from '../../../../components/ui';
export type Many2OneSuffixProps = {
    onRetrieveData: () => Promise<DropdownMenuGroup[]>;
    onItemClick?: (item: DropdownMenuItem) => void;
    onOpenChange?: (open: boolean) => void;
};
//# sourceMappingURL=Many2OneSuffix.types.d.ts.map