import { type NextPage } from "next";
import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Projects: NextPage = () => {
    
    return (
        <div className="h-screen w-screen bg-black px-60 py-11">
            <div>
                <Link href="/">
                    <IoMdArrowBack className="text-2xl text-white duration-150 hover:text-white/50" />
                </Link>
            </div>

            <div className="my-[4rem] px-40 text-white">
                <div>
                    <h1 className="text-5xl font-semibold">My Projects</h1>
                    <p className="text-md py-5 font-normal text-zinc-500">
                        Collection of projects I&apos;ve worked on throughout my
                        time as a software engineer.
                    </p>
                </div>

                <div className="h-[1px] bg-white opacity-20 " />
            </div>


            <div>

            </div>
        </div>
    );
};

export default Projects;
