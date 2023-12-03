import Item from "./Item";

type Props = {
  items: Item[];
  onClick?: (item: Item) => void;
  disabled?: (item: Item) => boolean;
};

const BaseItems = ({ items, onClick, disabled }: Props) => {
  return (
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
  );
};

export default BaseItems;
