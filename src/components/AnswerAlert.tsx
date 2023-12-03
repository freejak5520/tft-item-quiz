import Item from "./Item";

type Props = {
  text: string;
  answer: Item[];
};

const AnswerAlert = ({ text, answer }: Props) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen min-h-full w-full flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-gray-200 bg-opacity-95 px-16 py-8 text-center shadow dark:bg-gray-800">
        <div className="mb-8 text-xl font-bold text-gray-900 dark:text-gray-100">
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
