import { type NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Torus from "@/components/Torus";

const Home: NextPage = () => {
    const navItems = [
        { title: "Projects", href: "projects" },
        { title: "Experience", href: "experience" },
        { title: "Contact", href: "contact" },
    ];

    return (
        <div className=" z-100 absolute block h-screen w-screen justify-center gap-10 overflow-hidden bg-gradient-to-br from-black via-zinc-800/20 to-black p-10">
            <div className="fixed top-[-40px]">
                <Torus />
            </div>
            <div className="relative pt-44">
                <nav className="pb-10">
                    <ul className="text-md flex items-center justify-center gap-5 text-zinc-400">
                        {navItems.map((x) => (
                            <Link
                                key={x.title}
                                href={x.href}
                                className="text-md duration-700 hover:text-zinc-400/70"
                            >
                                {x.title}
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div className=" mx-auto pb-4 text-center">
                    <h1 className="bg-gradient-to-r from-zinc-200/60 via-zinc-100/80 to-zinc-200/60 bg-clip-text font-extrabold text-transparent lg:h-[7rem] lg:text-8xl">
                        Ryan Leung
                    </h1>
                </div>

                <div className="mx-auto text-center">
                    <p className="text-lg text-zinc-500">
                        Hello, I am a junior software developer based in
                        Melbourne.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
