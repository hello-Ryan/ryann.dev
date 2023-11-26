import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    const navItems = [
        { title: "Projects", href: "projects" },
        { title: "Contact", href: "contact" },
    ];

    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-br from-black via-zinc-800/20 to-black">
                <nav className="">
                    <ul className="flex items-center justify-center gap-5 text-zinc-500">
                        {navItems.map((x) => (
                            <Link
                                key={x.title}
                                href={x.href}
                                className="text-md duration-700 hover:text-zinc-500/70"
                            >
                                {x.title}
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h1 className="font-sans text-8xl font-bold text-white">
                        Ryan Leung
                    </h1>
                </div>
                <div className="p-5">
                    <p className="text-zinc-500">
                        Hello, I am a junior software developer based in
                        Melbourne.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
