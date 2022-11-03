import { signal } from "@preact/signals";
import type { FunctionComponent } from "preact";

export const translation = signal(false);
export const count = signal(false);

export const TranslateText: FunctionComponent<{ en: string; jp: string }> = ({
  en,
  jp
}) => {
  return <span>{translation.value ? en : jp}</span>;
};

export const TranslateToggle: FunctionComponent = () => {
  return (
    <>
      <button
        id='translate'
        aria-label='Click here to translate Japanese phrases into English'
        onClick={() => (translation.value = !translation.value)}
        class={`${
          translation.value ? "bg-sky-900" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          class={`${
            translation.value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 rounded-full bg-white transition ease-out`}
        ></span>
      </button>
      <a href='#content' class='sr-only' aria-label='Skip to content'></a>
    </>
  );
};
