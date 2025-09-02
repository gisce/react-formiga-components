import React, { CSSProperties } from "react";
import * as TablerIcons from "@tabler/icons-react";
import { IconProps } from "./Icon.types";
export declare const iconMapper: (key: string, props?: {
    className?: any;
    style: CSSProperties;
}) => (() => React.CElement<{
    className?: any;
    style?: React.CSSProperties | undefined;
}, React.Component<{
    className?: any;
    style?: React.CSSProperties | undefined;
}, any, any>>) | (() => React.DetailedReactHTMLElement<{
    style: {
        display: "inline-flex";
        alignItems: "center";
        lineHeight: string;
        verticalAlign: string;
    };
    children: React.FunctionComponentElement<Omit<import("@ant-design/icons/lib/components/Icon").IconComponentProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
}, HTMLElement>) | undefined;
export declare const getTablerIcon: (icon: string) => React.ForwardRefExoticComponent<TablerIcons.IconProps & React.RefAttributes<TablerIcons.Icon>> | ((type: "filled" | "outline", iconName: string, iconNamePascal: string, iconNode: TablerIcons.IconNode) => React.ForwardRefExoticComponent<TablerIcons.IconProps & React.RefAttributes<TablerIcons.Icon>>) | typeof TablerIcons.dynamicImports | typeof TablerIcons.icons | typeof TablerIcons.iconsList;
export declare const Icon: React.FC<IconProps>;
//# sourceMappingURL=Icon.d.ts.map