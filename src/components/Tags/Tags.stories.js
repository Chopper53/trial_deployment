import { Tags } from ".";

export default {
  title: "Components/Tags",
  component: Tags,
  argTypes: {
    icon: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    style: {
      options: ["warning", "danger", "info", "success", "primary", "disabled"],
      control: { type: "select" },
    },
    border: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: "off",
    style: "warning",
    border: "off",
    className: {},
    text: "Label",
  },
};
