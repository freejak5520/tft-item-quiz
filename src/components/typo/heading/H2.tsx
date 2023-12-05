import React from "react";

type Props = {
  children?: React.ReactNode;
};

const H2 = ({ children }: Props) => {
  return (
    <h2 className="text-center text-3xl font-bold text-font-950 dark:text-font-50">
      {children}
    </h2>
  );
};

export default H2;
