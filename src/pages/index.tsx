"use client";
import Link from "next/link";
import { Roboto_Flex } from "next/font/google";
import { TypingAnimation } from "../components/typing-animation";
import { GiCat } from "react-icons/gi";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(useGSAP);

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
        }, 4000);
        return () => clearTimeout(x);
    }, []);

    useGSAP(() => {
        gsap.from("#counter", {
            innerText: 0,
            duration: 3.5,
            snap: {
                innerText: 1,
            },
        });
        // gsap.fromTo('#circle' ,0.5, {drawSVG:'0% 0%'}, {drawSVG:'0% 100%', ease:Power1.easeInOut})
    });

    return (
        <>
            {/* Loading screen */}
            <div
                className={`pointer-events-none absolute left-0 top-0 z-10 flex min-h-screen w-screen flex-col items-center justify-center bg-background text-3xl transition-opacity duration-700 ease-out ${
                    !isLoading ? "opacity-0" : "opacity-100"
                } ${roboto.className}`}
            >
                {/* <svg id="svg" className="absolute h-screen w-screen ">
                    <circle
                        id="circle2"
                        cx="50%"
                        cy="50%"
                        r="200"
                        stroke="#302F30"
                        fill="none"
                        strokeWidth="4"
                    />
                    <circle
                        id="circle"
                        cx="50%"
                        cy="50%"
                        r="200"
                        stroke="#fff"
                        fill="none"
                        strokeWidth="4"
                    />
                </svg> */}
                <p className="inline-block ">Ryan Leung | Portfolio</p>
                <div id="counter" className="p-2">
                    {100}
                </div>
            </div>

            {/* Home page */}
            <div
                className={`fixed bottom-7 left-7 right-7 top-7 select-none bg-background px-[28rem] py-8 text-primary dark:bg-background  ${
                    roboto.className
                }  transition-opacity duration-700 ease-in  ${
                    !isLoading ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="absolute left-0 top-0 h-full w-[1px] bg-black" />
                <div className="absolute right-0 top-0 h-full w-[1px] bg-black" />
                <div className="absolute left-0 top-0 h-[1px] w-full bg-black" />
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-black" />

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
                    {!isLoading && (
                        <TypingAnimation
                            text="Ryan Leung"
                            typingSpeed={75}
                            delay={750}
                        />
                    )}
                </div>
                {/* About me section */}
                <div>
                    <p className="w-50%">
                        Hello! I&apos;m a software engineer based in Melbourne,
                        with a focus in Full Stack development. With a passion
                        for web development and both 2D and 3D animations, I
                        enjoy building websites that encorporate animations into
                        their design. Using libraries such as{" "}
                        <a
                            className="inline-block font-bold underline decoration-blue-400 decoration-4 hover:cursor-pointer"
                            target="_blank"
                            href="https://gsap.com/"
                        >
                            GSAP
                        </a>{" "}
                        and{" "}
                        <a
                            className="inline-block font-bold underline decoration-blue-400 decoration-4 hover:cursor-pointer"
                            target="_blank"
                            href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                        >
                            R3F
                        </a>
                        to make websites come to life.
                    </p>
                </div>
                {/* Professional Experience */}
                <div>
                    <p className="font-extrabold text-4xl">Experience</p>
                    {/* EY */}
                    <div className="mt-1 flex flex-col rounded-sm bg-gray-600 p-3 text-white">
                        <div className="flex flex-row gap-2 text-sm text-gray-400">
                            <div>Melbourne, Australia  &middot; Full time </div>
                            <div>May 2023 - Present</div>
                        </div>

                        <div>
                            <p>
                                Full stack developer specialising in React,
                                Next.js and tailwind for the front end, and for
                                backend Node.js and Spring framework. Other
                                responsiblities include, incident response, code
                                review and documentation.
                            </p>
                        </div>

                        <div className="flex flex-row gap-1 pt-3">
                            {/* move to component later */}
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                React
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Tailwind
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                SASS
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Spring
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Node.js
                            </div>
                        </div>
                    </div>

                    {/* EY - Intership */}
                    <div className="mt-1 flex flex-col rounded-sm bg-gray-600 p-3 text-white">
                        <div className="flex flex-row gap-2 text-sm text-gray-400">
                            <div>
                                Melbourne, Australia &middot; Full time &middot;
                                Jan 2023 - Jul 2023
                            </div>
                        </div>
                        <div>
                            <p>
                                Developed the web client for the EY Space for
                                Earth product and platform. Developed using
                                Remix, React/Typescript and NodeJS with
                                integration utilising GraphQL. Developed
                                storybook components to reduce component
                                coupling and improve readability to ensure the
                                app is scalable and sustainable.
                            </p>
                        </div>

                        <div className="flex flex-row gap-1 pt-3">
                            {/* move to component later */}
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                React
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                SASS
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                GraphQL
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Storybook
                            </div>
                        </div>
                    </div>

                    {/* Monash */}
                    <div className="mt-1 flex flex-col rounded-sm bg-gray-600 p-3 text-white">
                        <div className="flex flex-row gap-2 text-sm text-gray-400">
                            <div>
                                Monash University &middot; Full time &middot;
                                2021 - 2023
                            </div>
                        </div>
                        <div>
                            <p>
                                Bachelor of Computer Science
                            </p>
                        </div>

                        <div className="flex flex-row gap-1 pt-3">
                            {/* move to component later */}
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Typescript
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Python
                            </div>
                            <div className="rounded-full bg-gray-900 p-1 px-2">
                                Data structure and algorithms
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
