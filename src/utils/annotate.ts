import { annotate } from "rough-notation";
import { createEffect, onCleanup } from "solid-js";

type Props = {
  ref: HTMLElement;
  type: "box" | "underline";
};

export const createAnnotation = ({ ref, type }: Props) => {
  createEffect(() => {
    const annotation = annotate(ref, {
      type: type,
      color: "#0c4a6e"
    });

    annotation.show();
    onCleanup(() => annotation.remove());
  });
};
