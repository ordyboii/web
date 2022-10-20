import { type RefObject, useEffect } from "react";
import { annotate } from "rough-notation";

export const useAnnotation = (
  ref: RefObject<HTMLElement>,
  type: "box" | "underline"
) => {
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
