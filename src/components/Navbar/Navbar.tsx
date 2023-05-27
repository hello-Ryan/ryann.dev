import { TbHexagonLetterR } from "react-icons/tb";
import { NavbarItem, NavbarMenu } from "@/components";
import { BsChevronDown, BsMoon, BsSun } from "react-icons/bs";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // * switch to using zustand later
  const [mode, setMode] = useState("dark");

  const toggleColorMode = useCallback(() => {
    setMode((current) => {
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((current) => !current);
  }, []);

  return (
    <nav className="z-40 w-full">
      <div className="flex flex-row items-center px-16 py-3 transition duration-500">
        <TbHexagonLetterR
          onClick={() => void router.push("/")}
          className="cursor-pointer text-white"
          size={72}
        />
        <div className="ml-8 hidden flex-row md:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Experience" />
          <NavbarItem label="Projects" />
          <NavbarItem label="Social" />
          <NavbarItem label="Contact me" />
        </div>
        <div className="ml-auto">
          <div
            onClick={toggleColorMode}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            {mode === "dark" ? <BsMoon size={24} /> : <BsSun size={24} />}
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="relative flex cursor-pointer flex-row items-center gap-2 md:hidden"
        >
          <BsChevronDown
            className={`ml-2  transform text-white transition duration-300 ${
              menuOpen ? "-scale-y-100" : ""
            }`}
          />
          <NavbarMenu visible={menuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
