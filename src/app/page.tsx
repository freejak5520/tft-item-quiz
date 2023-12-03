"use client";

import { useCallback, useEffect, useState } from "react";
import useItems from "@/hooks/useItems";
import Item from "@/components/Item";
import AnswerAlert from "@/components/AnswerAlert";
import Operator from "@/components/Operator";
import Title from "@/components/Title";
import BaseItems from "@/components/BaseItems";
import Separator from "@/components/Separator";

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
      console.error("정답 확인 불가능");
      return;
    }

    const sorted = [...selectItems].sort((a, b) => {
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
        <AnswerAlert
          text={alertText}
          answer={answer.map((id) => getItemById(id)) as Item[]}
        />
      )}
      <Container>
        <Title>아이템 조합 퀴즈</Title>

        <div className="flex h-fit items-center justify-center py-12">
          {selectItems[0] ? (
            <Item
              onClick={() => {
                if (disabled) return;

                setSelectItems((prev) => {
                  return prev.filter((value) => value.id != selectItems[0].id);
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
                  return prev.filter((value) => value.id != selectItems[1].id);
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

        <Separator />

        <BaseItems
          items={baseItems}
          onClick={(item) => {
            if (disabled) return;

            setSelectItems((prev) => {
              return [...prev, item];
            });
          }}
        />
      </Container>
    </>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex h-screen flex-col justify-center">
      <div className="h-screen rounded bg-gray-50 p-16 shadow dark:bg-slate-800 md:h-auto">
        {children}
      </div>
    </div>
  );
};
