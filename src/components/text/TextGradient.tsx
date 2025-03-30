import { PropsWithChildren } from "react";

export default function TextGradient({ children }: PropsWithChildren) {
  return (
    <h1 className="pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
      {children}
    </h1>
  );
}
