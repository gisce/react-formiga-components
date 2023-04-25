import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ApiOutlined } from "@ant-design/icons";

import { One2ManyTopBar } from "./One2ManyTopBar";

export default {
  title: "Components/Widgets/One2Many/One2ManyTopBar",
  component: One2ManyTopBar,
} as ComponentMeta<typeof One2ManyTopBar>;

const Template: ComponentStory<typeof One2ManyTopBar> = (args) => {
  return <One2ManyTopBar {...args} />;
};

export const OnlyToggleView = Template.bind({});
OnlyToggleView.args = {
  title: "A bar with only toggle view button",
  currentViewMode: "tree",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
};

export const BasicAllIcons = Template.bind({});
BasicAllIcons.args = {
  title: "Basic bar with all possible icons",
  currentViewMode: "form",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    delete: {
      show: true,
      onClick: () => {
        console.log("delete");
      },
    },
    navigator: {
      show: true,
      onPreviousItem: () => {
        console.log("onPreviousItem");
      },
      onNextItem: () => {
        console.log("onNextItem");
      },
      totalItems: 3,
      currentItemIndex: 0,
    },
    search: {
      show: true,
      onClick: () => {
        console.log("search");
      },
    },
  },
};

export const BasicTree = Template.bind({});
BasicTree.args = {
  title: "Basic bar for a tree example",
  currentViewMode: "tree",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    delete: {
      show: true,
      disabled: true,
      onClick: () => {
        console.log("delete");
      },
    },
  },
};

export const BasicTreeRemoveInProgress = Template.bind({});
BasicTreeRemoveInProgress.args = {
  title: "Tree example with remove in progress",
  currentViewMode: "tree",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    delete: {
      show: true,
      loading: true,
      onClick: () => {
        console.log("delete");
      },
    },
  },
};

export const BasicForm = Template.bind({});
BasicForm.args = {
  title: "Basic bar for a form example",
  currentViewMode: "form",
  viewModes: ["tree", "form", "graph"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    delete: {
      show: true,
      disabled: true,
      onClick: () => {
        console.log("delete");
      },
    },
    navigator: {
      show: true,
      onPreviousItem: () => {
        console.log("onPreviousItem");
      },
      onNextItem: () => {
        console.log("onNextItem");
      },
      totalItems: 3,
      currentItemIndex: 0,
    },
  },
};

export const BasicTreeMany2Many = Template.bind({});
BasicTreeMany2Many.args = {
  title: "Tree example for many2many custom",
  currentViewMode: "tree",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    search: {
      show: true,
      onClick: () => {
        console.log("search");
      },
    },
    delete: {
      show: true,
      disabled: true,
      icon: <ApiOutlined />,
      tooltip: "Unlink",
      onClick: () => {
        console.log("delete");
      },
    },
  },
};

export const BasicFormMany2Many = Template.bind({});
BasicFormMany2Many.args = {
  title: "Form example for many2many custom",
  currentViewMode: "tree",
  viewModes: ["tree", "form"],
  locale: "en_US",
  onChangeViewMode: (viewMode) => {
    console.log({ viewMode });
  },
  buttonOpts: {
    create: {
      show: true,
      onClick: () => {
        console.log("create");
      },
    },
    search: {
      show: true,
      onClick: () => {
        console.log("search");
      },
    },
    delete: {
      show: true,
      icon: <ApiOutlined />,
      tooltip: "Unlink",
      onClick: () => {
        console.log("delete");
      },
    },
    navigator: {
      show: true,
      onPreviousItem: () => {
        console.log("onPreviousItem");
      },
      onNextItem: () => {
        console.log("onNextItem");
      },
      totalItems: 3,
      currentItemIndex: 0,
    },
  },
};
