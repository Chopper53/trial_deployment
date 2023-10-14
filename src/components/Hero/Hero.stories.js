import { Hero } from ".";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    mode: "dark",
    className: {},
    esculturesNumber: "nine",
    esculturesNumberClassName: {},
  },
};
