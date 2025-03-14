"use client";
import Link from "next/link";
import { Roboto_Flex } from "next/font/google";
import { TypingAnimation } from "../components/typing-animation";
import { GiCat } from "react-icons/gi";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Experience, { IExperience } from "@/components/experience";

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
        }, 1);
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

    const experience: IExperience[] = [
        {
            title: "Full Stack Developer",
            startDate: new Date(2024, 4),
            company: "EY",
            employmentType: "Full Time",
            description:
                "Full stack developer specialising in React, Next.js and tailwind for the front end, and for backend Node.js and Spring framework. Other responsiblities include, incident response, code review and documentation.",
            location: "Melbourne, Australia",
            showDuration: true
        },
        {
            title: "Front End Developer",
            startDate: new Date(2023, 0),
            endDate: new Date(2023, 5),
            employmentType: "Internship",
            company: "EY",
            description:
                "Remix, React/Typescript and NodeJS with integration utilising GraphQL. Storybook components to reduce component coupling and improve readability to ensure the app is scalable and sustainable.",
            location: "Melbourne, Australia",
            showDuration: true
        },
        {
            title: "Bachelor of Computer Science",
            startDate: new Date(2021, 0),
            endDate: new Date(2023, 11),
            employmentType: "Full Time",
            company: "Monash",
            description: "",
            location: "Melbourne, Australia",
            showDuration: false,
        },
    ];

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
                className={`fixed bottom-7 left-7 right-7 top-7 bg-background px-[28rem] py-8 text-primary dark:bg-background  ${
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
                        {" "} to make websites come to life.
                    </p>
                </div>
                {/* Professional Experience */}
                <div className="pt-10">
                    <Experience experiences={experience} />
                </div>
            </div>
        </>
    );
}
