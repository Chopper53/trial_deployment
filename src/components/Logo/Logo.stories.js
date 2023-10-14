import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    property1: {
      options: ["white", "negative", "positive", "green", "purple"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "white",
    className: {},
    groupClassName: {},
    group: "/img/group-1-5.png",
    tianClassName: {},
  },
};
