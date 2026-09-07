"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HEADER_HEIGHT } from "@/lib/constants";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const timer = setTimeout(() => {
        if (hash) {
          const target = document.querySelector(hash);
          if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
            window.scrollTo({ top, behavior: "smooth" });
            history.replaceState(null, "", pathname);
          }
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    let cancelled = false;
    let retries = 0;
    const scrollToHash = () => {
      if (cancelled || retries > 60) return;
      retries++;
      const target = document.querySelector(hash);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", window.location.pathname);
      } else {
        requestAnimationFrame(scrollToHash);
      }
    };
    requestAnimationFrame(scrollToHash);
    return () => { cancelled = true; };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
