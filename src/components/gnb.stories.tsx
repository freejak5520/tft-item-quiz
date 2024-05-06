import type { Meta, StoryObj } from "@storybook/react";
import Gnb from "./gnb";

const meta = {
  title: "Components/Gnb",
  component: Gnb,
} satisfies Meta<typeof Gnb>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
