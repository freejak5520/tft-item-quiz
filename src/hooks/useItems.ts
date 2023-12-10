import { useCallback, useEffect, useMemo, useState } from "react";

const fetchData = async () => {
  const response = await fetch("/api/items", {
    next: { revalidate: 3600 },
  });
  const responseData = await response.json();
  return responseData as Item[];
};

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setItems(data);
    });
  }, []);

  const baseItems = useMemo(() => {
    return items.filter((item) => item.id >= 1 && item.id <= 9) ?? [];
  }, [items]);

  const buildItems = useMemo(() => {
    return items.filter((item) => item.id > 9);
  }, [items]);

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
    (id: number) => items.find((item) => item.id === id),
    [items]
  );

  const resultData = {
    items,
    baseItems,
    buildItems,
    getRandomBaseItem,
    getRandomBuildItem,
    getItemById,
  };

  return resultData;
};

export default useItems;
