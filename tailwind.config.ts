import { type Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                cursor: "cursor .6s linear infinite alternate",
                type: "type 1.8s ease-out .8s 1 normal both",
                "type-reverse":
                    "type 1.8s ease-out 0s infinite alternate-reverse both",
            },
            keyframes: {
                type: {
                    "0%": { width: "0ch" },
                    "6%": { width: "1ch" },
                    "12%": { width: "2ch" },
                    "18%": { width: "3ch" },
                    "24%": { width: "4ch" },
                    "30%": { width: "5ch" },
                    "36%": { width: "6ch" },
                    "42%": { width: "7ch" },
                    "48%": { width: "8ch" },
                    "54%": { width: "9ch" },
                    "60%": { width: "10ch" },
                    "66%": { width: "11ch" },
                    "72%": { width: "12ch" },
                    "78%": { width: "13ch" },
                    "84%": { width: "14ch" },
                    "90%": { width: "15ch" },
                    "96%": { width: "16ch" },
                },
                cursor: {
                    "0%, 40%": {
                        opacity: "1",
                    },
                    "60%,100%": {
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
