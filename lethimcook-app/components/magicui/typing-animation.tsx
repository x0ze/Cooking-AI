"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        "text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
