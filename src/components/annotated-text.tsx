import { annotate } from "rough-notation";
import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import { HeadingOne, HeadingThree, HeadingTwo } from "./typography";

type Props = {
  component?: "HeadingOne" | "HeadingTwo" | "HeadingThree";
  type: "box" | "underline";
  content: string;
};

export default function AnnotatedText({ type, component, content }: Props) {
  const ref = createRef();

  useEffect(() => {
    const annotation = annotate(ref.current, {
      type: type,
      color: "#0c4a6e"
    });

    annotation.show();
    return () => annotation.remove();
  });

  if (component === "HeadingOne") {
    return <HeadingOne ref={ref}>{content}</HeadingOne>;
  }

  if (component === "HeadingTwo") {
    return <HeadingTwo ref={ref}>{content}</HeadingTwo>;
  }

  if (component === "HeadingThree") {
    return <HeadingThree ref={ref}>{content}</HeadingThree>;
  }

  return <span ref={ref}>{content}</span>;
}
