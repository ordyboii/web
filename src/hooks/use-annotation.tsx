import { RefObject, useEffect } from "react";
import { annotate } from "rough-notation";

export const useAnnotation = (
  ref: RefObject<any | null>,
  props: {
    type: "highlight" | "underline";
    colour: "#60a5fa" | "#facc15";
    iterations?: number;
    strokeWidth?: number;
  }
) => {
  useEffect(() => {
    const annotation = annotate(ref.current, {
      type: props.type,
      color: props.colour,
      iterations: props.iterations,
      strokeWidth: props.strokeWidth
    });

    annotation.show();

    return () => annotation.remove();
  }, [ref, props.colour, props.iterations, props.strokeWidth, props.type]);
};
