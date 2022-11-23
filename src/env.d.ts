/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  VITE_SECRET: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": any;
  }
}

type Project = {
  title: string;
  summary: string;
  image: string;
  client: string;
  protected: boolean;
};

type Side = {
  title: string;
  image: string;
  link?: string;
  description: string;
};

type Post = {
  title: string;
  summary: string;
  image: string;
  date: string;
};
