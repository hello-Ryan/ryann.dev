import PageBreak from "@/components/PageBreak";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Experience = () => {
    return (
        <div className="h-screen w-screen bg-zinc-900 md:px-48 md:py-11">
            <div>
                <Link href="/">
                    <IoMdArrowBack className="text-2xl text-white duration-150 hover:text-white/50" />
                </Link>
            </div>

            <div className="px-28">
                <div className="mt-[4rem] text-white">
                    <div>
                        <h1 className="text-4xl font-semibold">My Experience</h1>
                        <p className="text-base py-5 font-normal text-zinc-500">
                            Experience that I&apos;ve gained throughout my career.
                        </p>
                    </div>
                </div>

                <PageBreak />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3"></div>
            </div>
        </div>
    );
};

export default Experience;
