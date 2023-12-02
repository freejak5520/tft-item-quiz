import Image from "next/image";

type Props = {
  item: Item;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Item = ({ item, onClick }: Props) => {
  return (
    <div
      className="flex flex-col items-center rounded overflow-hidden border-2 border-gray-600 p-0 shadow"
      onClick={onClick}
    >
      <Image
        src={`/img/items/${item.image}`}
        alt={item.name}
        width={75}
        height={75}
      />
      {/* <div className="text-xs">{item.name}</div> */}
    </div>
  );
};

export default Item;
