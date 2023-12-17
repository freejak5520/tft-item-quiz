"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Gnb = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-0 md:py-4" suppressHydrationWarning={true}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="py-2 text-font-950 dark:text-font-50">
          롤토체스 아이템 조합 퀴즈
        </h1>
        <div className="flex flex-row text-font-950 dark:text-font-50">
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
          {/* <div className="text-font-950 dark:text-font-50">Hello</div> */}
        </div>
      </div>
    </header>
  );
};

export default Gnb;
