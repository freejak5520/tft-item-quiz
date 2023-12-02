import { useCallback, useMemo } from "react";
import items from "../data/items/10.json";

const useItems = () => {
  const baseItems = useMemo(() => {
    return items.data.filter((item) => item.id >= 1 && item.id <= 9);
  }, []);
  const buildItems = useMemo(() => {
    return items.data.filter((item) => item.id > 9);
  }, []);

  const getRandomItem = (itemList: Item[]) => {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    return itemList[randomIndex];
  };

  const getRandomBaseItem = useCallback(
    () => getRandomItem(baseItems),
    [baseItems]
  );

  const getRandomBuildItem = useCallback(
    () => getRandomItem(buildItems),
    [buildItems]
  );

  const getItemById = useCallback(
    (id: number) => items.data.find((item) => item.id === id),
    []
  );

  return {
    items,
    baseItems,
    buildItems,
    getRandomBaseItem,
    getRandomBuildItem,
    getItemById,
  };
};

export default useItems;
