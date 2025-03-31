"use client";

import { MailPlus } from "lucide-react";
import { twMerge } from "tailwind-merge";

type CtaButtonProps = {
  className?: string;
  full?: boolean;
};
export default function CtaButton({ className, full = true }: CtaButtonProps) {
  return (
    <a href="#contact">
      <button
        className={twMerge(
          "p-3 font-bold max-w-md text-white flex flex-row gap-2 bg-green-600 hover:bg-green-500 transition-color cursor-pointer w-full rounded-lg border-1",
          className
        )}
      >
        <MailPlus />
        {full && <p>Skontaktuj się z nami</p>}
      </button>
    </a>
  );
}
