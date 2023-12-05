import React from "react";

type Props = {
  children?: React.ReactNode;
};

const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-center text-4xl font-bold text-font-950 dark:text-font-50">
      {children}
    </h1>
  );
};

export default H1;
