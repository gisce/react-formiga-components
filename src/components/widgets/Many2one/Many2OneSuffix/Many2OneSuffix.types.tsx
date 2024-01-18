import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui";

export type Many2OneSuffixProps = {
  onRetrieveData: () => Promise<DropdownMenuGroup[]>;
  onItemClick?: (item: DropdownMenuItem) => void;
};
