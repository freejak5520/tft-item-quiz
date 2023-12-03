import Image from "next/image";

type Props = {
  item?: Item;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
  size?: number;
};

const Item = ({ item, onClick, active = false, size = 75 }: Props) => {
  return (
    <div
      className={`relative flex flex-col items-center overflow-hidden rounded border-2 border-gray-600 p-0 shadow ${
        onClick && "cursor-pointer"
      }`}
      onClick={onClick}
    >
      {active && (
        <div className="absolute left-0 top-0 h-full w-full border-2 border-green-700 bg-black bg-opacity-50"></div>
      )}
      {item ? (
        <Image
          src={`/img/items/${item.image}`}
          alt={item.name}
          width={size}
          height={size}
        />
      ) : (
        <Image
          src={"/img/items/none.png"}
          width={size}
          height={size}
          alt="none"
        />
      )}
      {/* <div className="text-xs">{item.name}</div> */}
    </div>
  );
};

export default Item;
