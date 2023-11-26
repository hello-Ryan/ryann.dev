import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Projects = () => {
    return (
        <div className="h-screen w-screen bg-black px-60 py-11">
            <Link href="/">
                <IoMdArrowBack className="text-2xl text-white duration-150 hover:text-white/50" />
            </Link>


            <div className="text-white my-[4rem] px-40">
                Here
            </div>
        </div>
    );
};

export default Projects;
