"use client";

import { useCallback, useEffect, useState } from "react";

import AnswerAlert from "@/components/AnswerAlert";
import BaseItems from "@/components/BaseItems";
import Item from "@/components/Item";
import Operator from "@/components/Operator";
import Separator from "@/components/Separator";
import H1 from "@/components/typo/heading/H1";
import useItems from "@/hooks/useItems";

import Container from "../_components/Container";

const ItemQuiz = () => {
  const { baseItems, getRandomBuildItem, getItemById } = useItems();

  const [quizItem, setQuizItem] = useState<Item | undefined>();
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

    const selectItem = getItemById(Number(`${sorted[0].id}${sorted[1].id}`));

    return selectItem?.id === quizItem?.id;
  }, [getItemById, quizItem, selectItems]);

  useEffect(() => {
    if (!checkResult || !startQuiz) return;

    if (selectItems.length < 2) {
      return;
    }

    setDisabled(true);

    setAlertText(checkResult() ? "정답입니다." : "오답입니다.");
    setAnswer(quizItem?.baseItems ?? []);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
      setSelectItems([]);
      setQuizItem(undefined);

      setTimeout(() => {
        startQuiz();
        setDisabled(false);
      }, 1);
    }, 1000);
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
        <H1>아이템 조합 퀴즈</H1>

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
          <Item item={quizItem} size={70} />
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
};

export default ItemQuiz;
