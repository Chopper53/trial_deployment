import { SwitchMode } from ".";

export default {
  title: "Components/SwitchMode",
  component: SwitchMode,
  argTypes: {
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    style: {
      options: ["disabled", "hover", "border", "default"],
      control: { type: "select" },
    },
    icon: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    innerIcon: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    label: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    ousideIcons: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "dark",
    style: "disabled",
    icon: "off",
    innerIcon: "off",
    label: "off",
    ousideIcons: "off",
  },
};
