"use client";

import { useCallback, useEffect, useState } from "react";
import useItems from "@/hooks/useItems";
import styled from "@emotion/styled";
import Item from "@/components/Item";

export default function Home() {
  const { baseItems, getRandomBuildItem, getItemById } = useItems();
  const [quizItem, setQuizItem] = useState<Item | null>(null);
  const [selectItems, setSelectItems] = useState<Item[]>([]);

  const [disabled, setDisabled] = useState(false);

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

    setDisabled(true);

    setTimeout(() => {
      if (checkResult()) {
        alert("정답입니다.");
      } else {
        alert("오답입니다.");
      }

      setSelectItems([]);
      startQuiz();
      setDisabled(false);
    }, 1);
  }, [checkResult, selectItems, startQuiz]);

  useEffect(() => {
    if (!startQuiz) return;

    startQuiz();
  }, [startQuiz]);

  return (
    <>
      <div className="w-full h-full bg-black "></div>
      <div className="container mx-auto md:px-12">
        <div className="flex justify-center py-6">
          {quizItem && <Item item={quizItem} />}
        </div>
        <hr />
        <div className="flex gap-2 justify-center p-6 h-48">
          {selectItems.map((item) => (
            <Item
              key={item.id}
              onClick={() => {
                if (disabled) return;

                setSelectItems((prev) => {
                  return prev.filter((value) => value.id != item.id);
                });
              }}
              item={item}
            />
          ))}
        </div>
        <hr />
        <div className="flex gap-2 cursor-pointer justify-center py-6">
          {baseItems.map((item: Item) => (
            <Item
              key={item.id}
              onClick={() => {
                if (disabled) return;

                setSelectItems((prev) => {
                  return [...prev, item];
                });
              }}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const QuestionSection = styled.div``;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;
