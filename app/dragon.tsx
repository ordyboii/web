"use client";

import { Player } from "@lottiefiles/react-lottie-player";

type Props = {
  size: number;
};

export default function DragonAnimation({ size }: Props) {
  return (
    <Player
      autoplay
      loop
      src='/dragon.json'
      style={{ width: `${size}px` }}
      aria-label='Dragon typing on a keyboard animation'
    />
  );
}
