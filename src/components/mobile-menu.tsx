import { createSignal } from "solid-js";
import { translation } from "./translate";
import { Text } from "./typography";

export default function MobileMenu({ children }: { children: Element }) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        class='flex items-center gap-2 rounded-md bg-sky-900 px-3 py-2 text-white transition hover:bg-sky-500 md:hidden'
      >
        <Text>Menu</Text>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-7 h-7'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 9h16.5m-16.5 6.75h16.5'
          />
        </svg>
      </button>
      {isMenuOpen() && (
        <nav
          class='absolute inset-x-2 top-2 z-10 animate-fade-down space-y-4 rounded-sm 
        bg-sky-900 p-6 text-white shadow-xl'
        >
          <div class='flex items-center justify-between text-lg font-bold'>
            {translation() ? "Jake Ord" : "オルドジェイク"}
            <button onClick={() => setIsMenuOpen(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-8 h-8'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {children}
        </nav>
      )}
    </>
  );
}
