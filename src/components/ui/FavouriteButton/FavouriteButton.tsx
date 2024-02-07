import { StarOutlined, StarFilled, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  FavouriteButtonProps,
  FavouriteButtonRef,
} from "./FavouriteButton.types";
import { Fragment, forwardRef, memo, useImperativeHandle, useRef } from "react";
import { Dropdown } from "@/components";

export const FavouriteButtonComponent = forwardRef<
  FavouriteButtonRef,
  FavouriteButtonProps
>((props: FavouriteButtonProps, ref) => {
  const { isFavourite, onToggleFavourite, ...rest } = props;

  const dropdownRef = useRef<FavouriteButtonRef>(null);

  useImperativeHandle(ref, () => ({
    close: () => dropdownRef.current?.close(),
  }));

  return (
    <Fragment>
      <Button
        type={isFavourite ? "primary" : "default"}
        style={{
          width: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          padding: 0,
        }}
        onClick={onToggleFavourite}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isFavourite ? (
            <StarFilled style={{ fontSize: "150%", color: "white" }} />
          ) : (
            <StarOutlined style={{ fontSize: "150%" }} />
          )}
        </div>
      </Button>
      <Dropdown ref={dropdownRef} {...rest}>
        <Button
          style={{
            width: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          icon={<DownOutlined style={{ fontSize: "0.5em" }} />}
          onClick={(e) => e.preventDefault()}
        ></Button>
      </Dropdown>
    </Fragment>
  );
});

export const FavouriteButton = memo(FavouriteButtonComponent);
FavouriteButtonComponent.displayName = "FavouriteButtonComponent";
FavouriteButton.displayName = "FavouriteButton";
