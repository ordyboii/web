import { createEffect } from "solid-js";

type Props = {
  size: number;
};

export default function Dragon({ size }: Props) {
  createEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <lottie-player autoplay loop src='/dragon.json' style={{ width: size }} />
  );
}
