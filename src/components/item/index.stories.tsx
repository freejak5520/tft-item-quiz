import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Item from "@/components/item";

const item = {
  id: 1,
  image: "TFT10_Item_KDAEmblem",
};

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    item: item,
  },
};

export const Active: Story = {
  args: {
    active: true,
    item: item,
  },
};
