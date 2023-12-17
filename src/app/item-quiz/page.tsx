"use client";

import { useEffect, useState } from "react";

import AnswerAlert from "@/components/modal/AnswerAlert";
import BaseItems from "@/components/BaseItems";
import Item from "@/components/Item";
import Operator from "@/components/Operator";
import Separator from "@/components/Separator";
import useItemQuiz from "@/hooks/useItemQuiz";
import Container from "../_components/Container";

const ItemQuiz = () => {
  const { qItem, checkAnswer, baseItems, getItemById, goNextRound } =
    useItemQuiz();

  const [selectItems, setSelectItems] = useState<Item[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [answer, setAnswer] = useState<number[]>([]);

  useEffect(() => {
    if (!checkAnswer) return;

    if (selectItems.length < 2) {
      return;
    }

    setDisabled(true);

    const correct = checkAnswer(selectItems[0], selectItems[1]);

    setAlertText(correct ? "정답입니다." : "오답입니다.");
    setAnswer(qItem?.baseItems ?? []);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
      setSelectItems([]);

      setTimeout(() => {
        setDisabled(false);
        goNextRound();
      }, 1);
    }, 1000);
  }, [checkAnswer, goNextRound, qItem, selectItems]);

  return (
    <>
      {alertVisible && (
        <AnswerAlert
          text={alertText}
          answer={answer.map((id) => getItemById(id)) as Item[]}
        />
      )}
      <Container>
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
          <Item item={qItem} size={70} />
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
