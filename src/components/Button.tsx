import { ButtonHTMLAttributes } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "default" | "error" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
}

const Button = (props: Props) => {
  const variants = {
    primary: "bg-blue-500",
  } as { [key: string]: string };

  const size = {
    md: "px-3 py-1.5",
  } as { [key: string]: string };

  return (
    <button
      {...props}
      className={`rounded ${
        props.variant && variants[props.variant ?? "default"]
      } ${props.size && size[props.size || "md"]} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
