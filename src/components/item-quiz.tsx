"use client";

import Item from "@/components/item";
import BaseItems from "@/components/item/base-items";
import AnswerAlert from "@/components/modal/answer-alert";
import Operator from "@/components/operator";
import Separator from "@/components/separator";
import useItemQuiz from "@/hooks/useItemQuiz";
import Link from "next/link";
import { useEffect, useState } from "react";

const ItemQuiz = () => {
  const { qItem, checkAnswer, baseItems, getItemById, goNextRound } =
    useItemQuiz();

  const [selectItems, setSelectItems] = useState<Item[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState<number[]>([]);

  useEffect(() => {
    if (!checkAnswer) return;

    if (selectItems.length < 2) {
      return;
    }

    setDisabled(true);

    const correct = checkAnswer(selectItems[0], selectItems[1]);

    setIsCorrect(correct);
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
        <div className="fixed left-0 top-0 z-50 flex h-screen min-h-full w-full flex-col items-center justify-center bg-bg-950 bg-opacity-50">
          <AnswerAlert
            correct={isCorrect}
            items={answer.map((id) => getItemById(id)) as Item[]}
          />
        </div>
      )}
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

      <div className="flex justify-center">
        <p>
          The full item combination guide can be found{" "}
          <Link
            href="https://tft.op.gg/game-guide/items"
            className="font-bold text-blue-800 underline dark:text-blue-300"
          >
            here
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default ItemQuiz;
