"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-xl z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
        style={{ 
          backgroundColor: '#1f2937', 
          borderColor: '#a29a88'
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-white hover:text-gray-300 transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <a 
          href="/kontakt"
          className="text-sm font-medium relative text-black px-4 py-2 rounded-full transition-all hover:opacity-80"
          style={{ backgroundColor: '#a29a88' }}
        >
          <span>Kostenlose Analyse</span>
          <span 
            className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px" 
            style={{ background: 'linear-gradient(to right, transparent, #1f2937, transparent)' }}
          />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};