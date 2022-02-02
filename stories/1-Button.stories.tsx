import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Button",
  component: Button,
};

const Text = (): JSX.Element => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

const Emoji = (): JSX.Element => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export { Text, Emoji };
