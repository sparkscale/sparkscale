"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-gray-200/20",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -100,
                rotate: rotate - 10,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.2,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.5 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border border-gray-300/20",
                        "shadow-[0_8px_30px_0_rgba(0,0,0,0.06)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function ElegantShapes() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <ElegantShape
                delay={0.3}
                width={500}
                height={120}
                rotate={8}
                gradient="from-gray-400/15"
                className="left-[-8%] top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={400}
                height={100}
                rotate={-12}
                gradient="from-[#a29a88]/12"
                className="right-[-5%] top-[65%]"
            />

            <ElegantShape
                delay={0.4}
                width={250}
                height={70}
                rotate={-6}
                gradient="from-gray-500/12"
                className="left-[8%] bottom-[8%]"
            />

            <ElegantShape
                delay={0.6}
                width={180}
                height={50}
                rotate={15}
                gradient="from-[#a29a88]/15"
                className="right-[18%] top-[12%]"
            />

            <ElegantShape
                delay={0.7}
                width={120}
                height={35}
                rotate={-20}
                gradient="from-gray-400/12"
                className="left-[22%] top-[8%]"
            />

            <ElegantShape
                delay={0.8}
                width={160}
                height={45}
                rotate={10}
                gradient="from-[#a29a88]/10"
                className="right-[35%] bottom-[15%]"
            />
        </div>
    );
} 