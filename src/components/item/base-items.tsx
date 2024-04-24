import Item from "@/components/item";

type Props = {
  items: Item[];
  onClick?: (item: Item) => void;
};

const BaseItems = ({ items, onClick }: Props) => {
  const baseItems =
    items && items.length > 0
      ? items
      : [
          { id: 1, image: "gray" },
          { id: 2, image: "gray" },
          { id: 3, image: "gray" },
          { id: 4, image: "gray" },
          { id: 5, image: "gray" },
          { id: 6, image: "gray" },
          { id: 7, image: "gray" },
          { id: 8, image: "gray" },
          { id: 9, image: "gray" },
        ];

  return (
    <div className="mx-auto grid w-fit cursor-pointer grid-cols-3 gap-6 py-12">
      {baseItems.map((item: Item, index) => (
        <Item
          key={item.id ?? index}
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
