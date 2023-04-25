import { LocaleType, tForLang } from "@/context";
import React from "react";
import { O2MTopBarButtonsType } from "./One2ManyTopBar.types";
import { Button } from "@/components/ui/Button";
import {
  FileAddOutlined,
  SaveOutlined,
  DeleteOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Separator } from "./One2ManyTopBar.styles";
import { O2MTBNavigator } from "./O2MTBNavigator";

export type O2MTBButtonsProps = LocaleType & {
  buttonOpts?: O2MTopBarButtonsType;
};

const ButtonOrderGroups = [["create", "search"], ["delete"], ["navigator"]];

const DefaultIconsForButtons = {
  search: <SearchOutlined />,
  create: <FileAddOutlined />,
  delete: <DeleteOutlined />,
  save: <SaveOutlined />,
};

const DefaultTooltipsForButtons = {
  create: "createNew",
  search: "searchExisting",
  delete: "delete",
};

export const O2MTBButtons = (props: O2MTBButtonsProps) => {
  const { buttonOpts, locale } = props;
  const components = [];

  ButtonOrderGroups.forEach((buttonGroup, i) => {
    const componentsLength = components.length;
    buttonGroup.forEach((buttonType, j) => {
      if (
        buttonOpts?.[buttonType] &&
        buttonType === "navigator" &&
        buttonOpts?.[buttonType].show
      ) {
        components.push(
          <>
            <O2MTBNavigator
              key={`${buttonType}-${i}-${j}`}
              totalItems={buttonOpts?.[buttonType].totalItems}
              currentItemIndex={buttonOpts?.[buttonType].currentItemIndex}
              onNextItem={buttonOpts?.[buttonType].onNextItem}
              onPreviousItem={buttonOpts?.[buttonType].onPreviousItem}
              locale={locale}
            />
          </>
        );
      } else if (buttonOpts?.[buttonType] && buttonOpts?.[buttonType].show) {
        const icon =
          buttonOpts?.[buttonType].icon || DefaultIconsForButtons[buttonType];
        const tooltip =
          buttonOpts?.[buttonType].tooltip ||
          tForLang(DefaultTooltipsForButtons[buttonType], locale);
        components.push(
          <Button
            key={`${buttonType}-${i}-${j}`}
            tooltip={tooltip}
            icon={buttonOpts?.[buttonType].loading ? <LoadingOutlined /> : icon}
            onClick={buttonOpts?.[buttonType].onClick}
            disabled={
              buttonOpts?.[buttonType].disabled ||
              buttonOpts?.[buttonType].loading
            }
          />
        );
      }
    });
    // We check if we have added a component for this group or not in order to add a separator
    const mustAddSeparator = components.length > componentsLength;
    if (mustAddSeparator) {
      components.push(<Separator key={`separator-${i}`} />);
    }
  });

  return <>{components}</>;
};
