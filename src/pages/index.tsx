import { type NextPage } from "next";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
    return (
        <div className="overflow-hidden">
            <div
                className="relative z-20 block h-screen w-screen select-none justify-center gap-10 overflow-hidden
                    bg-gradient-to-br from-black via-zinc-800/20 to-black"
            >
                <div className="absolute z-10">
                    <Navbar />
                </div>

                <div className="absolute z-0 flex h-screen w-screen flex-col items-center justify-center">
                    <h1
                        className="h-20 bg-gradient-to-r from-zinc-200/60 via-zinc-100/80 to-zinc-200/60 bg-clip-text text-5xl
                        font-extrabold text-transparent md:h-[7rem] md:text-8xl"
                    >
                        Ryan Leung
                    </h1>

                    <p className="text-sm text-zinc-400 md:text-lg">
                        Aspiring Software Engineer
                    </p>
                </div>
            </div>

            <div
                id="projects"
                className="relative z-20 block h-screen w-screen select-none justify-center gap-10 overflow-hidden 
                bg-gradient-to-br from-black via-zinc-800/20 to-black text-white"
            >
                Projects
            </div>

            <div
                id="experience"
                className="relative z-20 block h-screen w-screen select-none justify-center gap-10 overflow-hidden 
                bg-gradient-to-br from-black via-zinc-800/20 to-black text-white"
            >
                Experience
            </div>
            <div
                id="contact"
                className="relative z-20 block h-screen w-screen select-none justify-center gap-10 overflow-hidden 
                bg-gradient-to-br from-black via-zinc-800/20 to-black text-white"
            >
                Contact
            </div>
        </div>
    );
};

export default Home;
