import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

function PremiumPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add a small delay so the preloader is visible and feels premium
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.img
              src="/logo.png"
              alt="Protech Computer Education"
              className="h-20 w-auto mb-8"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function RootLayout() {
  return (
    <>
      <PremiumPreloader />
      <Outlet />
      <Toaster position="top-center" />
    </>
  );
}
