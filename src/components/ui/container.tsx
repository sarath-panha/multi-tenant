// components/ui/Container.tsx
import React from "react";
import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto px-4 sm:px-6 lg:px-8",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "md",
          "max-w-7xl": size === "lg",
          "max-w-[1400px]": size === "xl",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
