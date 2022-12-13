"use client";

import {
  createContext,
  useState,
  useMemo,
  useContext,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction
} from "react";

type TranslateStore = {
  translate: boolean;
  setTranslate: Dispatch<SetStateAction<boolean>>;
} | null;

const store = createContext<TranslateStore>(null);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const [translate, setTranslate] = useState(false);
  const value = useMemo(() => ({ translate, setTranslate }), [translate]);

  return <store.Provider value={value}>{children}</store.Provider>;
};

export const useTranslateStore = () => {
  const translateStore = useContext(store);
  if (!translateStore) throw Error("No translate provided");

  return translateStore;
};

type Props = {
  en: string;
  jp: string;
};

export const TranslateText = ({ en, jp }: Props) => {
  const { translate } = useTranslateStore();

  return <span>{translate ? en : jp}</span>;
};

export const SkipToTranslate = () => {
  return (
    <a
      href='#translate'
      className='sr-only'
      aria-label='If you would like to translate this phrase interact with this link, please bear in mind this will put you back to the top of my website content'
    ></a>
  );
};

export const TranslateToggle = () => {
  const { translate, setTranslate } = useTranslateStore();

  return (
    <>
      <button
        id='translate'
        aria-label='Click here to translate Japanese phrases into English'
        onClick={() => setTranslate(!translate)}
        className={`${
          translate ? "bg-sky-900" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            translate ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 rounded-full bg-white transition ease-out`}
        ></span>
      </button>
      <a href='#content' className='sr-only' aria-label='Skip to content'></a>
    </>
  );
};
