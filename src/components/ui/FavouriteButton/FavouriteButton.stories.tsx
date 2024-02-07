import { FC } from "react";
import { FavouriteButton } from "./FavouriteButton";
import { FavouriteButtonProps } from "./FavouriteButton.types";
import { Default as DefaultStory } from "../Dropdown/Dropdown.stories";

export default {
  title: "Components/FavouriteButton",
  component: FavouriteButton,
};

const Template: FC<FavouriteButtonProps> = (args) => (
  <FavouriteButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onRetrieveData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DefaultStory.exampleData;
  },
  header: <strong>Your shortcuts</strong>,
  label: "FavouriteButton",
};
