import React from "react";
import { DashboardProps } from "./Dashboard.types";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const Dashboard = (props: DashboardProps) => {
  const { children = [] } = props;

  const items = React.Children.map(
    children,
    (
      child:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
    ) => {
      const { parms, id } = (child as any).props;
      return (
        <div key={id} data-grid={parms}>
          {child}
        </div>
      );
    }
  );

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      onLayoutChange={(layout, layouts) => {
        // console.log();
      }}
    >
      {items}
    </ResponsiveReactGridLayout>
  );
};
