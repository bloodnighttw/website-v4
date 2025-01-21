import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./utils/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {},
        },
    },
    plugins: [typography],
} satisfies Config;
