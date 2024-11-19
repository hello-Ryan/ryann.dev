"use client";
import { type NextPage } from "next";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AboutMe: React.FC = () => {
    const email = "ryanleung1029@gmail.com";
    const showToast = async () => {
        toast.success("Email copied", {
            position: "bottom-left",
            pauseOnFocusLoss: false,
        });
        await navigator.clipboard.writeText(email);
    };

    return (
        <motion.div
            initial={{ transform: "translateX(-1000px)" }}
            animate={{ transform: "translateX(0px)" }}
            transition={{ duration: 0.5, delay: 1, ease: "anticipate" }}
            className="p-10 text-white"
        >
            <div className="flex h-full w-full flex-col rounded-2xl bg-slate-200 p-5 py-9">
                <div className="flex flex-row justify-between">
                    {/* Role */}
                    <div className="flex flex-row gap-2 text-slate-900">
                        <div className="my-auto h-2 w-2 rounded-full bg-slate-400" />
                        <p className="font-sans text-sm">Software Engineer</p>
                    </div>

                    {/* Pill */}
                    <div className="flex w-fit flex-row gap-2 rounded-full bg-green-200 px-5 text-green-600">
                        <div className="my-auto h-2 w-2 rounded-full bg-green-600" />
                        <p className="font-sans text-sm font-semibold">
                            AVAILABLE FOR WORK
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mt-3 flex w-full flex-row justify-between px-0 pb-2 pt-5">
                        <div className="flex flex-col">
                            <div className="font-sans text-4xl font-semibold tracking-tighter text-slate-900">
                                I&apos;m Ryan Leung
                            </div>
                            <p className="text-md pt-2 font-sans text-slate-700">
                                Software engineer based in Melbourne.
                                <br />
                                Currently working at EY.
                            </p>
                            <div className="mt-2 flex w-fit flex-row content-center gap-1 border-b-2 border-dotted border-black p-1 font-sans text-sm font-semibold text-black">
                                ryanleung1029@gmail.com
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={void showToast}
                                >
                                    <FaRegCopy className="h-3 w-3 text-slate-700" />
                                </motion.button>
                            </div>
                        </div>
                        <div className="mx-auto content-center">
                            <div className="h-5 w-5 rounded-full bg-black" />
                        </div>
                    </div>
                </div>
                <div className="h-full w-full">
                    {/* fractal tree where angles are controlled with x/y mouse position or with scroll or automatic */}
                </div>
            </div>
        </motion.div>
    );
};

const Experience: React.FC<{ expanded: boolean }> = ({ expanded }) => {
    return (
        <motion.div
            className={`${
                !expanded
                    ? "col-span-2 rounded-2xl bg-[#04151F] p-2 text-white hover:cursor-pointer"
                    : ""
            }`}
            whileHover={{
                scale: 0.97,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            Experience
        </motion.div>
    );
};
const Projects: React.FC<{ expanded: boolean }> = ({ expanded }) => {
    return (
        <motion.div
            className={`${
                !expanded
                    ? "col-span-1 rounded-2xl bg-[#C44900] p-2 text-white hover:cursor-pointer"
                    : ""
            }`}
            whileHover={{
                scale: 0.97,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            Projects
        </motion.div>
    );
};
const Contact: React.FC<{ expanded: boolean }> = ({ expanded }) => {
    return (
        <motion.div
            className={`${
                !expanded
                    ? "rounded-2xl bg-[#EFD6AC] p-2 text-black hover:cursor-pointer"
                    : ""
            }`}
            whileHover={{
                scale: 0.97,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            Contact
        </motion.div>
    );
};
const Expertise: React.FC<{ expanded: boolean }> = ({ expanded }) => {
    return (
        <motion.div
            className={`${
                !expanded
                    ? "col-span-2 rounded-2xl bg-[#183A37] p-2 text-white hover:cursor-pointer"
                    : ""
            }`}
            whileHover={{
                scale: 0.97,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            Expertise
        </motion.div>
    );
};

const Home: NextPage = () => {

    return (
        <div className="h-screen w-screen px-32 py-10">
            <div className="grid h-full w-full grid-cols-3 gap-1">
                <AboutMe />

                <div className="col-span-2 p-10">
                    <div className="flex h-full w-full flex-col">
                        <p className="pb-5 text-right font-serif text-9xl font-semibold leading-none tracking-wider text-slate-200">
                            PORTFOLIO
                        </p>
                        <AnimatePresence>
                            <div className="h-full w-full flex-1 rounded-2xl bg-slate-200 p-2">

                                <div className="grid h-full w-full grid-rows-2 gap-3">
                                    <div className="grid grid-cols-3 gap-3">
                                        <Experience expanded={false} />
                                        <Projects expanded={false} />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <Contact expanded={false} />
                                        <Expertise expanded={false} />
                                    </div>
                                </div>
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <ToastContainer limit={1} />
        </div>
    );
};

export default Home;
