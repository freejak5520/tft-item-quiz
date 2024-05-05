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
      className={`relative flex h-fit w-fit flex-col items-center overflow-hidden rounded border-2 border-slate-600 p-0 shadow ${
        onClick && "cursor-pointer"
      }`}
      onClick={onClick}
      data-testid={"item-" + item?.id ?? "1"}
    >
      {active && (
        <div className="absolute left-0 top-0 h-full w-full border-2 border-green-700 bg-bg-950 bg-opacity-50"></div>
      )}
      {item ? (
        <Image
          src={
            item.image
              ? `/img/items/${item.image}.webp`
              : "/img/items/gray.webp"
          }
          alt={item.name ?? ""}
          width={size}
          height={size}
        />
      ) : (
        <Image src={"/img/items/gray.webp"} width={size} height={size} alt="" />
      )}
    </div>
  );
};

export default Item;
