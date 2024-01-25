import { StarOutlined, StarFilled, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FavouriteButtonProps } from "./FavouriteButton.types";
import { Fragment, forwardRef, useImperativeHandle, useRef } from "react";
import { Dropdown, DropdownRef } from "@/components";

export const FavouriteButton = forwardRef<DropdownRef, FavouriteButtonProps>(
  ({ isFavourite, onToggleFavourite, ...rest }, ref) => {
    const dropdownRef = useRef<DropdownRef>(null);

    useImperativeHandle(ref, () => ({
      close: () => dropdownRef.current?.close(),
    }));

    return (
      <Fragment>
        <Button
          type={isFavourite ? "primary" : "default"}
          icon={
            isFavourite ? (
              <StarFilled style={{ color: "white" }} />
            ) : (
              <StarOutlined />
            )
          }
          style={{
            width: 50,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          onClick={onToggleFavourite}
        ></Button>
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
  },
);

FavouriteButton.displayName = "FavouriteButton";
