import { MailPlus } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ContactIconProps = {
    className?:string;
}

export default function ContactIconButton({className}: ContactIconProps){
    return (
        <a href="#contact">
          <button
            className={twMerge(
              "p-2 font-bold items-center max-w-md flex flex-row gap-2 cursor-pointer w-full rounded-lg",
              className
            )}
          >
            <MailPlus  />
          </button>
        </a>
      );
}