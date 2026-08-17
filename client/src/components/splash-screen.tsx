import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@assets/jw_logo_full.png";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.img
            src={logoFull}
            alt="JW에셋"
            className="w-64 sm:w-80 md:w-96 object-contain select-none"
            draggable={false}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
