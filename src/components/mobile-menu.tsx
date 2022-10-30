import { createSignal } from "solid-js";
import { HiOutlineMenuAlt4, HiSolidX } from "solid-icons/hi";
import { Text } from "./typography";
import { translate } from "./translate";

export default function MobileMenu({ children }: { children: Element }) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        class='flex items-center gap-2 rounded-md bg-sky-900 px-3 py-2 text-white transition hover:bg-sky-500 md:hidden'
      >
        <Text>Menu</Text>
        <HiOutlineMenuAlt4 class='h-7 w-7' />
      </button>
      {isMenuOpen() && (
        <nav
          class='absolute inset-x-2 top-2 z-10 animate-fade-down space-y-4 rounded-sm 
        bg-sky-900 p-6 text-white shadow-xl'
        >
          <div class='flex items-center justify-between text-lg font-bold'>
            {translate() ? "Jake Ord" : "オルドジェイク"}
            <button onClick={() => setIsMenuOpen(false)}>
              <HiSolidX class='h-8 w-8' />
            </button>
          </div>

          {children}
        </nav>
      )}
    </>
  );
}
