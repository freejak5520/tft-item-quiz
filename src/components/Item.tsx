import Image from "next/image";

type Props = {
  item: Item;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Item = ({ item, onClick }: Props) => {
  return (
    <div className="rounded p-1 bg-gray-500" onClick={onClick}>
      <Image
        src={`/img/items/${item.image}`}
        alt={item.name}
        width={75}
        height={75}
      />
      {item.name}
    </div>
  );
};

export default Item;
