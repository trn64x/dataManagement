"use client";

import { useMediaQuery } from "react-responsive";
import { ThemeToggle } from "../buttons/ThemeToggle";
import useLiftOff from "../hooks/useLiftOff";
import { Code2 } from "lucide-react";
import ContactIconButton from "../buttons/ContactIconButton";

export default function Header() {
  const { liftOff } = useLiftOff();
  const isMobile = useMediaQuery({ maxWidth: 384 });

  return (
    <div
      className={` transition-all flex-row flex items-center justify-between sticky top-0 left-0 z-10 w-full  dark:border-stone-800 border-stone-300 p-4  border-b-0 ${
        liftOff
          ? "dark:bg-stone-800/40 bg-stone-100/40 backdrop-blur-sm border-b-1"
          : ""
      }`}
    >
      <a href="#">
        <div className="font-mono flex flex-row gap-2 items-center">
          <div className="p-1 font-bold max-w-md text-white flex flex-row gap-2 bg-green-600 hover:bg-green-500 transition-color cursor-pointer rounded-sm">
            <Code2 />
          </div>
          {!isMobile && <span>eksabajt.pl</span>}
        </div>
      </a>
      <div className="flex flex-row gap-1">
        <ThemeToggle />
        <ContactIconButton />
      </div>
    </div>
  );
}
