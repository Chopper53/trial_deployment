import { NavigationBars } from ".";

export default {
  title: "Components/NavigationBars",
  component: NavigationBars,
  argTypes: {
    size: {
      options: ["round", "rounded", "complete"],
      control: { type: "select" },
    },
    mode: {
      options: ["both"],
      control: { type: "select" },
    },
    color: {
      options: ["purple-dark", "white", "green-light", "black", "outline", "purple-light", "purple"],
      control: { type: "select" },
    },
    distribution: {
      options: ["right", "icon", "center", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "round",
    mode: "both",
    color: "purple-dark",
    distribution: "right",
    className: {},
    logoGroup: "/img/group-1-26.png",
    optionsText: "Text",
    buttonsText: "Button",
  },
};
