import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Dashboard,
  DashboardItem,
  Button,
  CharInput,
  Field,
  FileInput,
  Form,
} from "@/index";

export default {
  title: "Components/Dashboard/Dashboard",
  component: Dashboard,
  argTypes: {
    children: { table: { disable: true }, control: { disable: true } },
    onFieldsChange: { control: { disable: true } },
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => {
  return (
    <Dashboard>
      <DashboardItem
        id="1"
        title="Dashboard Item 1"
        parms={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
      >
        <Form>
          <Field name="name" labelOpts={{ text: "Username" }}>
            <CharInput />
          </Field>
          <Field name="password" labelOpts={{ text: "Password" }}>
            <CharInput isPassword />
          </Field>
          <Field name="file" labelOpts={{ text: "File" }}>
            <FileInput />
          </Field>
          <Button onClick={() => {}}>Submit</Button>
        </Form>
      </DashboardItem>
      <DashboardItem
        id="2"
        title="Dashboard Item 2"
        parms={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}
      >
        <h1>2</h1>
      </DashboardItem>
    </Dashboard>
  );
};
export const Basic = Template.bind({});
Basic.args = {};
