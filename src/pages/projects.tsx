"use client";
import Link from "next/link";
import { TypingAnimation } from "../components/typing-animation";
import { usePathname } from "next/navigation";

export default function Index() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className="min-h-screen bg-background px-96 py-8 dark:bg-background">
            <div className="flex flex-row gap-5 py-2">

            </div>
            <TypingAnimation
                text="Hello, I'm Ryan."
                typingSpeed={75}
                delay={500}
            />
        </div>
    );
}
