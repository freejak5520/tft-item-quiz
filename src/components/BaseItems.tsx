import { Suspense } from "react";
import Item from "./Item";

type Props = {
  items: Item[];
  onClick?: (item: Item) => void;
};

const BaseItems = ({ items, onClick }: Props) => {
  return (
    <Suspense
      fallback={
        <div>hellohellohellohellohellohellohellohellohellohellohellohello</div>
      }
    >
      <div className="flex cursor-pointer flex-wrap justify-center gap-2 py-12">
        {items.map((item: Item) => (
          <Item
            key={item.id}
            onClick={() => {
              onClick && onClick(item);
            }}
            item={item}
            size={70}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default BaseItems;
