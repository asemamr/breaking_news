"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AnimateProviders({ children }) {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  return (
    <div>
    <AnimatePresence >
      <motion.div
        initial={{ opacity: 0 }}
        key={pathname}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5 }}
      >
        {children}
      </motion.div>
      </AnimatePresence>
      </div>
  );
}
