import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PaginationHeader } from "./PaginationHeader";

export default {
  title: "Components/UI/PaginationHeader",
  component: PaginationHeader,
  parameters: {
    docs: {
      description: {
        component:
          "A pagination component that combines Ant Design Pagination with selection summary and controls.",
      },
    },
  },
} as ComponentMeta<typeof PaginationHeader>;

const Template: ComponentStory<typeof PaginationHeader> = (args) => {
  return <PaginationHeader {...args} />;
};

// Common handlers for all stories
const commonHandlers = {
  onRequestPageChange: (page: number, pageSize?: number) => {
    console.log(`Page changed to ${page} with size ${pageSize}`);
  },
  onPageSizeChange: (pageSize: number) => {
    console.log(`Page size changed to ${pageSize}`);
  },
  onSelectAllGlobalRecords: async () => {
    console.log("Select all records clicked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const NoResults = Template.bind({});
NoResults.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 0,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
NoResults.parameters = {
  docs: {
    description: {
      story: "Shows the pagination state when there are no results.",
    },
  },
};

export const SinglePage = Template.bind({});
SinglePage.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 5,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
SinglePage.parameters = {
  docs: {
    description: {
      story: "Shows the pagination when all items fit in a single page.",
    },
  },
};

export const MultiplePages = Template.bind({});
MultiplePages.args = {
  initialPage: 2,
  initialPageSize: 10,
  total: 25,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
MultiplePages.parameters = {
  docs: {
    description: {
      story: "Shows pagination with multiple pages, currently on page 2.",
    },
  },
};

export const LargeDataset = Template.bind({});
LargeDataset.args = {
  initialPage: 5,
  initialPageSize: 20,
  total: 1000,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
LargeDataset.parameters = {
  docs: {
    description: {
      story: "Shows pagination with a large dataset and larger page size.",
    },
  },
};

export const WithPartialSelection = Template.bind({});
WithPartialSelection.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 100,
  realSelectedRowsLength: 5,
  visibleSelectedRowsLength: 5,
  ...commonHandlers,
};
WithPartialSelection.parameters = {
  docs: {
    description: {
      story:
        "Shows pagination with some records selected, displaying the selection summary.",
    },
  },
};

export const WithAllVisibleSelected = Template.bind({});
WithAllVisibleSelected.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 100,
  realSelectedRowsLength: 10,
  visibleSelectedRowsLength: 10,
  ...commonHandlers,
};
WithAllVisibleSelected.parameters = {
  docs: {
    description: {
      story:
        "Shows pagination when all visible records on the current page are selected.",
    },
  },
};

export const WithAllRecordsSelected = Template.bind({});
WithAllRecordsSelected.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 100,
  realSelectedRowsLength: 100,
  visibleSelectedRowsLength: 10,
  ...commonHandlers,
};
WithAllRecordsSelected.parameters = {
  docs: {
    description: {
      story: "Shows pagination when all records across all pages are selected.",
    },
  },
};

export const CustomPageSize = Template.bind({});
CustomPageSize.args = {
  initialPage: 1,
  initialPageSize: 50,
  total: 200,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
CustomPageSize.parameters = {
  docs: {
    description: {
      story: "Shows pagination with a custom page size of 50 items.",
    },
  },
};

export const LastPage = Template.bind({});
LastPage.args = {
  initialPage: 10,
  initialPageSize: 10,
  total: 100,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  ...commonHandlers,
};
LastPage.parameters = {
  docs: {
    description: {
      story: "Shows pagination when viewing the last page of results.",
    },
  },
};

export const WithoutSelectionControls = Template.bind({});
WithoutSelectionControls.args = {
  initialPage: 1,
  initialPageSize: 10,
  total: 100,
  realSelectedRowsLength: 0,
  visibleSelectedRowsLength: 0,
  onRequestPageChange: commonHandlers.onRequestPageChange,
  onPageSizeChange: commonHandlers.onPageSizeChange,
  // Omitting onSelectAllGlobalRecords to hide selection controls
};
WithoutSelectionControls.parameters = {
  docs: {
    description: {
      story:
        "Shows pagination without the selection controls by omitting the onSelectAllGlobalRecords handler.",
    },
  },
};
