"use client";

import { useCallback, useEffect, useState } from "react";
import useItems from "@/hooks/useItems";
import Item from "@/components/Item";

export default function Home() {
  const { baseItems, getRandomBuildItem, getItemById } = useItems();
  const [quizItem, setQuizItem] = useState<Item | null>(null);
  const [selectItems, setSelectItems] = useState<Item[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [answer, setAnswer] = useState<number[]>([]);

  const startQuiz = useCallback(() => {
    setQuizItem(getRandomBuildItem());
  }, [getRandomBuildItem]);

  const checkResult = useCallback(() => {
    if (selectItems.length < 2) {
      alert("정답 확인 불가능");
    }

    const sorted = selectItems.sort((a, b) => {
      return a.id - b.id;
    });
    const itemId = Number(`${sorted[0].id}${sorted[1].id}`);
    console.log(sorted, itemId);

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
      setAnswer(quizItem?.baseItems ?? []);
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
        setSelectItems([]);
        startQuiz();
        setDisabled(false);
      }, 1000);
    }, 1);
  }, [checkResult, quizItem, selectItems, startQuiz]);

  useEffect(() => {
    if (!startQuiz) return;

    startQuiz();
  }, [startQuiz]);

  return (
    <>
      {alertVisible && (
        <div className="fixed left-0 top-0 z-50 h-screen w-full">
          <div className="flex min-h-full flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="rounded bg-gray-100 bg-opacity-95 p-16 text-center shadow dark:bg-gray-900">
              <div className="mb-8 text-xl font-bold text-gray-900 dark:text-gray-100">
                {alertText}
              </div>
              <div className="flex gap-4">
                {answer.map((id, index) => {
                  const item = getItemById(id);
                  return item && <Item key={`${index}_${id}`} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto flex h-screen flex-col justify-center">
        <div className="h-screen rounded bg-gray-50 p-16 shadow dark:bg-gray-950 md:h-auto">
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
            아이템 조합 퀴즈
          </h1>
          <div className="flex h-fit items-center justify-center py-12">
            {selectItems[0] ? (
              <Item
                onClick={() => {
                  if (disabled) return;

                  setSelectItems((prev) => {
                    return prev.filter(
                      (value) => value.id != selectItems[0].id,
                    );
                  });
                }}
                item={selectItems[0]}
                size={70}
              />
            ) : (
              <Item size={70} />
            )}
            <Operator>+</Operator>
            {selectItems[1] ? (
              <Item
                onClick={() => {
                  if (disabled) return;

                  setSelectItems((prev) => {
                    return prev.filter(
                      (value) => value.id != selectItems[1].id,
                    );
                  });
                }}
                item={selectItems[1]}
                size={70}
              />
            ) : (
              <Item size={70} />
            )}
            <Operator>=</Operator>
            {quizItem && <Item item={quizItem} size={70} />}
          </div>

          <div className="border-b-2 border-gray-300 dark:border-gray-700"></div>

          <div className="flex cursor-pointer flex-wrap justify-center gap-2 py-12">
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
                size={70}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Operator = ({ children }: { children?: React.ReactNode }) => (
  <div className="p-4 text-xl text-gray-950 dark:text-gray-50">{children}</div>
);
