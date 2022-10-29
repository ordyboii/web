"use client";

import { type RefObject, useEffect } from "react";
import { annotate } from "rough-notation";

type Props = {
  ref: RefObject<HTMLElement>;
  type: "box" | "underline";
};

export const useAnnotation = ({ ref, type }: Props) => {
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: type,
        color: "#0c4a6e"
      });

      annotation.show();
      return () => annotation.remove();
    }
  }, [ref, type]);
};

export default function Annotate({ ref, type }: Props) {
  useAnnotation({ ref, type });

  return <div>UnderlineContent</div>;
}
