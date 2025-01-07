"use client";

import { motion } from "motion/react";
import "./globals.css";

const variants = {
    hidden: { opacity: 0.01},
    show: { opacity: 1},
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
        >
            {children}
        </motion.div>
);
}
