import BaseItems from "@/components/item/base-items";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import items from "@/data/items/11.json";

const baseItems = items.data.filter((item) => !item.baseItems);

const meta: Meta<typeof BaseItems> = {
  title: "Components/BaseItems",
  component: BaseItems,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: baseItems,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
