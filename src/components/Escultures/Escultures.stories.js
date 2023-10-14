import { Escultures } from ".";

export default {
  title: "Components/Escultures",
  component: Escultures,
  argTypes: {
    number: {
      options: ["seven", "two", "ten", "twelve", "three", "nine", "four", "eleven", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    number: "seven",
    className: {},
  },
};
