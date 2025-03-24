"use client";

import { cn } from "@/utils/utils";
import { useState } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function TestButton({ children, className, ...props }: ButtonProps) {
  const [pending, setPending] = useState(false);
  const [test, setTest] = useState(true);
  return (
    <button
      className={cn("bg-red-500 px-4 py-2", className, pending && "bg-green-500", { "bg-amber-500": test })}
      {...props}
    >
      {children}
    </button>
  );
}
