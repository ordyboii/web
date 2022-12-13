"use client";

import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Animate({ children }: PropsWithChildren) {
  return (
    <AnimatePresence>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </m.div>
      </LazyMotion>
    </AnimatePresence>
  );
}
