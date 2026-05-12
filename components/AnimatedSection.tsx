"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /* Verzögerung in Sekunden, damit aufeinander folgende Elemente versetzt einblenden */
  delay?: number;
  /* Richtung aus der das Element kommt */
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  /* once: true → Animation läuft nur einmal wenn das Element sichtbar wird */
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  /* initial und animate Werte direkt übergeben statt via variants-Objekt
     → umgeht TypeScript-Konflikte mit Framer Motion v12 Transition-Typen */
  const hidden = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
