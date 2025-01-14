"use client";

import { motion } from "motion/react";

const variants = {
    hidden: { opacity: 0.01, y: 10 },
    enter: { opacity: 1, y: 0 },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <motion.div variants={variants} initial="hidden" animate="enter">
            {children}
        </motion.div>
    );
}
