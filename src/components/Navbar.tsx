"use client";
import Link from "next/link";
import React from "react";

type NavItem = {
    title: string,
    href: string,
}

interface NavbarProps {
    navItems: NavItem[]
}

const Navbar:React.FC<NavbarProps> = ({ navItems }) => {

    return (
        <nav className="w-screen overflow-hidden px-5 py-10">
            <ul className="flex items-center justify-center gap-9 text-zinc-400">
                {navItems.map((x) => (
                    <Link
                        key={x.title}
                        href={x.href}
                        className="lg:text-base tracking-tight peer text-sm text-zinc-300 duration-300 hover:opacity-70"
                    >
                        {x.title}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
