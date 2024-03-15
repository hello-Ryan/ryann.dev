"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const navItems = [
        { title: ".home", href: "/" },
        { title: ".projects", href: "projects" },
        { title: ".experience", href: "experience" },
        { title: ".contact", href: "contact" },
    ];

    return (
        <nav className="w-screen overflow-hidden px-5 py-10">
            <div className="flex">
                <p className="text-2xl text-white">RyanLeung</p>

                <ul className="text-md flex items-center justify-center gap-9 text-zinc-400">
                    {navItems.map((x) => (
                        <Link
                            key={x.title}
                            href={`#${x.href}`}
                            scroll={false}
                            className="md:text-md lg:text-md peer text-sm text-zinc-300 duration-300 hover:opacity-70"
                        >
                            {x.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
