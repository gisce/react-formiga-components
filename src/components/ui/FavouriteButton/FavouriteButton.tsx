import { StarOutlined, StarFilled } from "@ant-design/icons";
import {
  FavouriteButtonProps,
  FavouriteButtonRef,
} from "./FavouriteButton.types";
import { forwardRef, memo } from "react";
import { ToggleDropdownButton } from "../ToggleDropdownButton/ToggleDropdownButton";

export const FavouriteButtonComponent = forwardRef<
  FavouriteButtonRef,
  FavouriteButtonProps
>((props: FavouriteButtonProps, ref) => {
  const { isFavourite, onToggleFavourite, ...rest } = props;

  return (
    <ToggleDropdownButton
      ref={ref}
      isActive={isFavourite}
      onToggle={onToggleFavourite}
      activeIcon={<StarFilled style={{ fontSize: "150%", color: "white" }} />}
      inactiveIcon={<StarOutlined style={{ fontSize: "150%" }} />}
      {...rest}
    />
  );
});

export const FavouriteButton = memo(FavouriteButtonComponent);
FavouriteButtonComponent.displayName = "FavouriteButtonComponent";
FavouriteButton.displayName = "FavouriteButton";
