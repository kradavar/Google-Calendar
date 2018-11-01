import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import { Button } from "../View/Switchers/Button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>My Button</Button>
  ))
  .add("validation", () => (
    <React.Fragment>
      {["error", "warn", "valid", null].map(valid => (
        <Button key={valid} size="100%" valid={valid}>
          click this button
        </Button>
      ))}
    </React.Fragment>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
