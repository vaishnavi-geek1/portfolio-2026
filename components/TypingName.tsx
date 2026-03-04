"use client";

import { useEffect, useState } from "react";

export function TypingName() {
  const FULL_NAME = "Vaishnavi\nGupta.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const max = FULL_NAME.length;

    const timeout = setTimeout(() => {
      let nextIndex = index + direction;

      if (nextIndex > max) {
        setDirection(-1);
        nextIndex = max - 1;
      } else if (nextIndex < 0) {
        setDirection(1);
        nextIndex = 1;
      }

      setIndex(nextIndex);
      setDisplayText(FULL_NAME.slice(0, nextIndex));
    }, index === max || index === 0 ? 900 : 120);

    return () => clearTimeout(timeout);
  }, [index, direction]);

  return (
    <h1 className="whitespace-pre-line text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">
      {displayText}
    </h1>
  );
}

