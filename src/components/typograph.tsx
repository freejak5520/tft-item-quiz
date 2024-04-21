import React from "react";

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-center text-4xl font-bold text-font-950 dark:text-font-50">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: Props) => {
  return (
    <h2 className="text-center text-3xl font-bold text-font-950 dark:text-font-50">
      {children}
    </h2>
  );
};
