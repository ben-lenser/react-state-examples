import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Welcome",
  component: Welcome,
};

export const ToStorybook: React.FC = (): JSX.Element => (
  <Welcome showApp={linkTo("Button")} />
);
