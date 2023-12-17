import { useCallback, useEffect, useState } from "react";
import useItems from "./useItems";

const useItemQuiz = () => {
  const { buildItems, baseItems, getItemById } = useItems();

  const [itemList, setItemList] = useState<Item[]>([]);
  const [round, setRound] = useState<number>(1);
  const [qItem, setQItem] = useState<Item>();

  const goNextRound = useCallback(() => {
    setRound((prev) => {
      setQItem(itemList[prev]);
      return prev + 1;
    });
  }, [itemList]);

  const checkAnswer = useCallback(
    (firstItem: Item, secondItem: Item) => {
      const baseItems = qItem?.baseItems;

      if (!baseItems) {
        return false;
      }

      const sorted = [firstItem, secondItem].map((item) => item.id).sort();

      const id = Number(`${sorted[0]}${sorted[1]}`);
      const correct = qItem.id === id;

      return correct;
    },
    [qItem]
  );

  useEffect(() => {
    setItemList(buildItems.sort(() => Math.random() - 0.5));
  }, [buildItems]);

  useEffect(() => {
    if (!itemList) return;

    setQItem(itemList[0]);
  }, [itemList]);

  return {
    itemList,
    round,
    qItem,
    baseItems,
    checkAnswer,
    getItemById,
    goNextRound,
  };
};

export default useItemQuiz;
