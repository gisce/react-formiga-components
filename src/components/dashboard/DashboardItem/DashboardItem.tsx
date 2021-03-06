import React from "react";
import { DashboardItemProps } from "./DashboardItem.types";
import { CloseOutlined } from "@ant-design/icons";

export const DashboardItem = (props: DashboardItemProps) => {
  const { id, title, children } = props;

  return (
    <div
      style={{
        backgroundColor: "#efefef",
        width: "100%",
        height: "100%",
        borderRadius: "0.5em",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <div style={{ padding: "0.25rem", alignSelf: "end" }}>
        <CloseOutlined
          onClick={(e) => {
            e.stopPropagation();
            onCloseTap(id);
          }}
        />
      </div> */}
      <div style={{ padding: "2em" }}>{children}</div>
    </div>
  );
};
