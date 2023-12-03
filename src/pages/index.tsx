import { type NextPage } from "next";
import Link from "next/link";
import ParticleTerrain from "@/components/ParticleTerrain";

const Home: NextPage = () => {
    const navItems = [
        { title: "// projects", href: "projects" },
        { title: "// experience", href: "experience" },
        { title: "// contact", href: "contact" },
    ];

    return (
        <div className=" absolute z-20 block h-screen w-screen select-none justify-center gap-10 overflow-hidden bg-gradient-to-br from-black via-zinc-800/20 to-black">
            <div className="z-100 fixed">
                <ParticleTerrain />
            </div>

            <div className="relative pt-10 md:pt-44">
                <nav className="pb-10">
                    <ul className="text-md flex items-center justify-center gap-6 text-zinc-400">
                        {navItems.map((x) => (
                            <Link
                                key={x.title}
                                href={x.href}
                                className="text-sm md:text-md lg:text-md tracking-tighter duration-700 hover:text-zinc-400/50"
                            >
                                {x.title}
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div className="mx-auto pb-4 text-center">
                    <h1 className="bg-gradient-to-r from-zinc-200/60 via-zinc-100/80 to-zinc-200/60 bg-clip-text font-extrabold text-transparent h-20 md:h-[7rem] text-5xl md:text-8xl">
                        Ryan Leung
                    </h1>
                </div>
                
                <div className="md:mx-auto lg:mx-auto text-center px-8">
                    <p className="text-sm md:text-lg text-zinc-400">
                        Aspiring Software Engineer and Web Developer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
