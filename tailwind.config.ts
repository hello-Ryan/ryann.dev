import { Roboto_Mono } from "next/font/google";
import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Roboto_Mono: ["RobotoMono", ...defaultTheme.fontFamily.sans],
            },
            
        },
    },
    plugins: [],
} satisfies Config;
