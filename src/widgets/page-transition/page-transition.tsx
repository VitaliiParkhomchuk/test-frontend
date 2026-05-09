import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  isPaddingOn?: boolean;
}

export function PageTransition({ children, className, isPaddingOn = true }: PageTransitionProps) {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <motion.main
      className={clsx("flex grow flex-col", className, isPaddingOn && "pt-16 pb-24")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}
