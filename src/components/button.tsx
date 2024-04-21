import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

type Size = "sm" | "md" | "lg" | "block";
type Variant = "primary" | "default" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: Props) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    default: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  } as { [key: string]: string };

  const sizeVariants = {
    sm: "px-1 py-0.5",
    md: "px-3 py-1.5",
    lg: "px-4 py-2",
    block: "py-1.5 w-full",
  } as { [key: string]: string };

  return (
    <button
      {...props}
      className={clsx(
        "rounded",
        variant && variants[variant],
        size && sizeVariants[size],
        props.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
