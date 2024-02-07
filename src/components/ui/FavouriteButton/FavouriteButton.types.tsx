import { DropdownProps } from "@/components";

export type FavouriteButtonProps = {
  isFavourite: boolean;
  onToggleFavourite: () => void;
} & DropdownProps;

export type FavouriteButtonRef = {
  close: () => void;
};
