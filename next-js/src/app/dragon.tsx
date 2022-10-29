"use client";

import { useEffect } from "react";

type Props = {
  size: number;
};

export default function Dragon({ size }: Props) {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <lottie-player autoplay loop src='/dragon.json' style={{ width: size }} />
  );
}
