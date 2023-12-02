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
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

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
      setAlertText(checkResult() ? "정답입니다." : "오답입니다.");
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
        setSelectItems([]);
        startQuiz();
        setDisabled(false);
      }, 1000);
    }, 1);
  }, [checkResult, selectItems, startQuiz]);

  useEffect(() => {
    if (!startQuiz) return;

    startQuiz();
  }, [startQuiz]);

  return (
    <>
      {alertVisible && (
        <div className="fixed left-0 top-0 w-full h-full">
          <div className="flex flex-col items-center justify-center min-h-full bg-black bg-opacity-50">
            <div className="rounded shadow bg-gray-200 bg-opacity-75 p-12">
              {alertText}
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto flex flex-col justify-center h-screen">
        <div className="px-12 bg-gray-700 rounded shadow">
          <div className="flex justify-center py-12 h-fit">
            {quizItem && <Item item={quizItem} />}
          </div>

          <div className="border-b-2 border-gray-500"></div>

          <div className="flex gap-2 justify-center items-center py-12 h-44">
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

          <div className="border-b-2 border-gray-500"></div>

          <div className="flex gap-2 cursor-pointer justify-center py-12">
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
      </div>
    </>
  );
}

const QuestionSection = styled.div``;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;
