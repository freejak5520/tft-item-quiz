"use client";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Analytics />
    </ThemeProvider>
  );
};

export default Providers;
