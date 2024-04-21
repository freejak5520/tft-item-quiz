import Item from "@/components/item";

type Props = {
  correct: boolean;
  items: Item[];
};

const AnswerAlert = ({ correct, items }: Props) => {
  return (
    <div className="rounded bg-bg-200 bg-opacity-95 px-16 py-8 text-center shadow dark:bg-bg-800">
      <div className="mb-8 text-xl font-bold text-font-900 dark:text-font-100">
        {correct ? (
          <div className="text-5xl font-bold text-green-600">O</div>
        ) : (
          <div className="text-5xl font-bold text-red-500">X</div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        {items.map((item, index) => {
          return item && <Item key={`${index}_${item.id}`} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AnswerAlert;
