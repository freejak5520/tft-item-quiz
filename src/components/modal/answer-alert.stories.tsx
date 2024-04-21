import AnswerAlert from "@/components/modal/answer-alert";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Modal/AnswerAlert",
  component: AnswerAlert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-bg-950 bg-opacity-50">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    correct: {
      control: "boolean",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Correct: Story = {
  args: {
    correct: true,
    items: [
      {
        id: 1,
        name: "test",
        image: "TFT_Item_BFSword",
      },
      {
        id: 2,
        name: "test",
        image: "TFT_Item_RecurveBow",
      },
    ],
  },
};

export const Wrong: Story = {
  args: {
    correct: false,
    items: [
      {
        id: 1,
        name: "test",
        image: "TFT_Item_RecurveBow",
      },
      {
        id: 2,
        name: "test",
        image: "TFT_Item_BFSword",
      },
    ],
  },
};
