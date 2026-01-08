"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  repeat?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  applyMask?: boolean;
  duration?: number;
}

export default function Marquee({
  children,
  vertical = false,
  repeat = 3,
  pauseOnHover = true,
  reverse = false,
  className,
  applyMask = true,
  duration = 40,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      {...props}
      className={cn("relative overflow-hidden w-full", className)}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      <div
        className={cn(
          "group flex w-max [gap:var(--gap)] [--gap:16px]",
          `[--duration:${duration}s]`,
          vertical ? "flex-col" : "flex-row"
        )}
        onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
        onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex shrink-0 [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : reverse
                ? "animate-marquee-horizontal-reverse flex-row items-center"
                : "animate-marquee-horizontal flex-row items-center"
            )}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {children}
          </div>
        ))}
      </div>

      {applyMask && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white dark:from-white/20 dark:to-white/20",
            vertical ? "bg-gradient-to-b" : "bg-gradient-to-r"
          )}
        />
      )}
    </div>
  );
}
