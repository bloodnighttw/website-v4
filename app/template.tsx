"use client";

import { motion } from "motion/react";
import "./globals.css";
import useBack from "@/utils/back";

const variants = {
    hidden: { opacity: 0.01 },
    show: { opacity: 1 },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- a tricky way to make sure the useEffect under the hood is called
    const _1 = useBack();
    return (
        <motion.div variants={variants} initial="hidden" animate="show">
            {children}
        </motion.div>
    );
}
