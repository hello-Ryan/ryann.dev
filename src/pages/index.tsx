"use client";
import Link from "next/link";
import { Roboto_Flex } from "next/font/google";
import { TypingAnimation } from "../components/typing-animation";
import { GiCat } from "react-icons/gi";
import { Suspense, useEffect, useState } from "react";

const roboto = Roboto_Flex({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export default function Index() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const x = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(x);
    }, []);

    return !isLoading ? (
        <div
            className={`min-h-screen bg-background px-80 py-8 dark:bg-background ${roboto.className}`}
        >
            <div className="flex flex-row gap-5 py-2">
                <Link className="duration-200 hover:scale-110" href="/">
                    <GiCat className="text-5xl text-primary dark:text-primary" />
                </Link>

                <Link
                    className="my-auto text-primary duration-200 hover:scale-110"
                    href="about"
                >
                    About
                </Link>
                <Link
                    className="my-auto text-primary duration-200 hover:scale-110"
                    href="projects"
                >
                    Projects
                </Link>
                <Link
                    className="my-auto text-primary duration-200 hover:scale-110"
                    href="contact"
                >
                    Contact
                </Link>
            </div>
            <div className="text-3xl">
                <TypingAnimation
                    text="Ryan Leung"
                    typingSpeed={75}
                    delay={500}
                />
            </div>
        </div>
    ) : (
        <div className="min-w-screen flex min-h-screen items-center justify-center">
            Testing
        </div>
    );
}
