"use client";

import { useCallback, useEffect, useState } from "react";
import useItems from "@/hooks/useItems";

export default function Home() {
  const { baseItems, getRandomBuildItem, getItemById } = useItems();
  const [quizItem, setQuizItem] = useState<Item | null>(null);
  const [selectItems, setSelectItems] = useState<Item[]>([]);

  const startQuiz = useCallback(() => {
    setQuizItem(getRandomBuildItem());
  }, [getRandomBuildItem]);

  const checkResult = useCallback(() => {
    if (selectItems.length < 2) {
      alert("정답 확인 불가능");
    }

    const sorted = selectItems.sort();
    const itemId = Number(`${sorted[0].id}${sorted[1].id}`);

    const selectItem = getItemById(itemId);

    console.log(itemId, selectItem, quizItem);
    return selectItem?.id === quizItem?.id;
  }, [getItemById, quizItem, selectItems]);

  useEffect(() => {
    if (!checkResult || !startQuiz) return;

    if (selectItems.length < 2) {
      return;
    }

    console.log(selectItems);

    if (checkResult()) {
      alert("정답입니다.");
    } else {
      alert("오답입니다.");
    }

    setSelectItems([]);
    startQuiz();
  }, [checkResult, selectItems, startQuiz]);

  useEffect(() => {
    if (!startQuiz) return;

    startQuiz();
  }, [startQuiz]);

  return (
    <div>
      <div>
        <div>{quizItem?.name}</div>
      </div>
      <hr />
      {selectItems.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectItems((prev) => {
              return prev.filter((value) => value.id != item.id);
            });
          }}
        >
          {item.name}
        </div>
      ))}
      <hr />
      {baseItems.map((item: Item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectItems((prev) => {
              return [...prev, item];
            });
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
