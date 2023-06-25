import { TbHexagonLetterR } from "react-icons/tb";
import { NavbarMenu } from "@/components";
import { BsChevronDown, BsMoon, BsSun } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const tabs = [
    { id: "Home" },
    { id: "Experience" },
    { id: "Projects" },
    { id: "Social" },
    { id: "Contact Me" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const [theme, setTheme] = useState('dark')

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((current) => !current);
  }, [])

  return (
    <nav className="dark:bg-transaprent z-40 w-full">
      <div className="flex flex-row items-center px-16 py-3 transition duration-500">
        <TbHexagonLetterR className="cursor-pointer text-white" size={52} />
        <div className="ml-auto hidden flex-row md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? "" : "hover:text-white/70"}
              text-1xl relative rounded-full px-4 py-2 font-semibold text-white`}
            >
              {tab.id === activeTab && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10 mix-blend-exclusion">
                {tab.id}
              </span>
            </button>
          ))}
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative flex cursor-pointer flex-row items-center gap-2 md:hidden"
        >
          <BsChevronDown
            className={`ml-2 transform text-white transition duration-300 ${
              mobileMenuOpen ? "-scale-y-100" : ""
            }`}
          />
          <NavbarMenu visible={mobileMenuOpen} tabs={tabs} />
        </div>
        <div className="ml-10">
          <div
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            {theme === "dark" ? <BsMoon size={24} /> : <BsSun size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
