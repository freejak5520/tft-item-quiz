import type { Meta, StoryObj } from "@storybook/react";
import Operator from "./operator";

const meta = {
  title: "Components/Operator",
  component: Operator,
  args: {
    children: <>+</>,
  },
} satisfies Meta<typeof Operator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
