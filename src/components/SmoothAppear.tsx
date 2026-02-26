"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type SmoothAppearProps = {
  children: React.ReactNode;
  delay?: number;
  /**
   * Animate when element enters viewport
   */
  revealOnScroll?: boolean;
} & HTMLMotionProps<"div">;

export function SmoothAppear({
  children,
  delay = 0,
  revealOnScroll = false,
  ...props
}: SmoothAppearProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.985,
      }}
      whileInView={
        revealOnScroll
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : undefined
      }
      animate={
        revealOnScroll
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        mass: 0.9,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
