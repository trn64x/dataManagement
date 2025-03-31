"use client";

import { ThemeToggle } from "../buttons/ThemeToggle";
import useLiftOff from "../hooks/useLiftOff";

export default function Header() {
  const { liftOff } = useLiftOff();
  return (
    <div
      className={`transition-all flex-row flex items-center justify-between sticky top-0 left-0 z-10 w-full  border-stone-800 p-4 border-b-0 ${
        liftOff ? "bg-stone-800/40 backdrop-blur-sm border-b-1" : ""
      }`}
    >
      <p className="font-mono">&lt;/&gt; eksabajt</p>
      <ThemeToggle />
    </div>
  );
}
