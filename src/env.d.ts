/// <reference types="astro/client" />

interface ImportMetaEnv {
  VITE_SECRET: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": any;
  }
}
