import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "@/components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: action("onClick"),
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button",
  },
};

export const Block: Story = {
  args: {
    variant: "primary",
    size: "block",
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
