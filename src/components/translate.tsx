import { type Component, createSignal, createEffect } from "solid-js";

export const [translation, setTranslation] = createSignal(false);

export const TranslateText: Component<{ en: string; jp: string }> = ({
  en,
  jp
}) => {
  return <span>{translation() ? en : jp}</span>;
};

export const TranslateToggle: Component = () => {
  const translate = () => {
    setTranslation(!translation());
    localStorage.setItem("translation", translation().toString());
  };

  createEffect(() => {
    setTranslation(!!localStorage.getItem("translation"));
  });

  return (
    <>
      <button
        id='translate'
        aria-label='Click here to translate Japanese phrases into English'
        onClick={translate}
        class={`${
          translation() ? "bg-sky-900" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          class={`${
            translation() ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 rounded-full bg-white transition ease-out`}
        ></span>
      </button>
      <a href='#content' class='sr-only' aria-label='Skip to content'></a>
    </>
  );
};
