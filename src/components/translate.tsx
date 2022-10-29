import { type Component, createSignal } from "solid-js";

export const [translate, setTranslate] = createSignal(false);

export const TranslateText: Component<{ en: string; jp: string }> = ({
  en,
  jp
}) => {
  return <>{translate() ? en : jp}</>;
};

export const TranslateToggle: Component = () => {
  return (
    <>
      <button
        id='translate'
        aria-label='Click here to translate Japanese phrases into English'
        onClick={() => setTranslate(!translate())}
        class={`${
          translate() ? "bg-sky-900" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          class={`${
            translate() ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 rounded-full bg-white transition ease-out`}
        ></span>
      </button>
      <a href='#content' class='sr-only' aria-label='Skip to content'></a>
    </>
  );
};
