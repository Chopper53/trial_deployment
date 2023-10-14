import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    content: {
      options: ["text", "icon", "text-icon"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["rounded", "secondary", "negative", "square", "primary", "text-only", "outliine"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "focused", "pressed", "hover", "disabled"],
      control: { type: "select" },
    },
    style: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    content: "text",
    size: "large",
    type: "rounded",
    stateProp: "default",
    style: "dark",
    className: {},
    text: "Button",
  },
};
