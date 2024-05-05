import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Size = "sm" | "md" | "lg" | "block";
type Variant = "primary" | "default" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    default: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
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
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
