"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Gnb = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-0 md:py-4" suppressHydrationWarning={true}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="py-2 text-font-950 dark:text-font-50">
          <h1>TFT - Item Combination Quiz</h1>
        </Link>
        <div className="flex flex-row text-font-950 dark:text-font-50">
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Gnb;
