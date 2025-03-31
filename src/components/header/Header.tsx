"use client";

import { useMediaQuery } from "react-responsive";
import CtaButton from "../buttons/CtaButton";
import { ThemeToggle } from "../buttons/ThemeToggle";
import useLiftOff from "../hooks/useLiftOff";

export default function Header() {
  const { liftOff } = useLiftOff();
  const isDesktop = useMediaQuery({ minWidth: 896 });
  const isMobile = useMediaQuery({ maxWidth: 384 });

  return (
    <div
      className={` transition-all flex-row flex items-center justify-between sticky top-0 left-0 z-10 w-full  dark:border-stone-800 border-stone-300 p-2  border-b-0 ${
        liftOff
          ? "dark:bg-stone-800/40 bg-stone-100/40 backdrop-blur-sm border-b-1"
          : ""
      }`}
    >
      <a href="#">
        <p className="font-mono">
          &lt;/&gt; {!isMobile && <span>eksabajt.pl</span>}
        </p>
      </a>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
        <CtaButton full={isDesktop} className="text-sm p-1 p-2 border-0" />
      </div>
    </div>
  );
}
