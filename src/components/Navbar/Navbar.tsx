import { TbHexagonLetterR } from "react-icons/tb";
import { NavbarItem, NavbarMenu } from "@/components";
import { BsChevronDown } from "react-icons/bs";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div className="flex flex-row items-center bg-zinc-700 px-16 py-6 transition duration-500">
        <TbHexagonLetterR className="text-white" size={50} />
        <div className="ml-8 hidden flex-row md:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Experience" />
          <NavbarItem label="Projects" />
          <NavbarItem label="Social" />
          <NavbarItem label="Contact me" />
        </div>

        <div
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
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
