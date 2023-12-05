import React from "react";
import Item from "./Item";

type Props = {
  text: string;
  answer: Item[];
};

const AnswerAlert = ({ text, answer }: Props) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen min-h-full w-full flex-col items-center justify-center bg-bg-950 bg-opacity-50">
      <div className="rounded bg-bg-200 bg-opacity-95 px-16 py-8 text-center shadow dark:bg-bg-800">
        <div className="mb-8 text-xl font-bold text-font-900 dark:text-font-100">
          {text}
        </div>
        <div className="flex gap-4">
          {answer.map((item, index) => {
            return item && <Item key={`${index}_${item.id}`} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AnswerAlert;
