import { PropsWithChildren } from "react";

export default function TextGradient({ children }: PropsWithChildren) {
  return (
    <h1 className="pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-emerald-500">
      {children}
    </h1>
  );
}
