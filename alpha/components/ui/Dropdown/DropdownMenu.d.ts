import { DropdownMenuGroup, DropdownMenuItem } from "./Dropdown.types";
export declare const DropdownMenu: ({ data, searchable, onItemClick, }: {
    data: DropdownMenuGroup[];
    searchable: true | false | "auto";
    onItemClick: (event: any) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const flattenDropdownItems: (data: DropdownMenuGroup[]) => DropdownMenuItem[];
//# sourceMappingURL=DropdownMenu.d.ts.map