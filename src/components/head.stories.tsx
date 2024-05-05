import type { Meta, StoryObj } from "@storybook/react";
import Head from "./head";

const meta = {
  component: Head,
} satisfies Meta<typeof Head>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    primary: true,
  },
} satisfies Story;
