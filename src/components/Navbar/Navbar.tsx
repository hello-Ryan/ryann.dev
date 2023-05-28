import { TbHexagonLetterR } from "react-icons/tb";
import { NavbarMenu } from "@/components";
import { BsChevronDown, BsMoon, BsSun } from "react-icons/bs";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const tabs = [
    { id: "Home" },
    { id: "Experience" },
    { id: "Projects" },
    { id: "Social" },
    { id: "Contact Me" },
  ];

  // * switch to using zustand later
  const [mode, setMode] = useState("dark");

  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const toggleColorMode = useCallback(() => {
    setMode((current) => {
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((current) => !current);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((current) => !current);
  }, []);

  return (
    <nav className="z-40 w-full bg-blue-400/10">
      <div className="flex flex-row items-center px-16 py-3 transition duration-500">
        <TbHexagonLetterR
          onClick={() => void router.push("/")}
          className="cursor-pointer text-white"
          size={72}
        />
        <div className="ml-10 hidden transition duration-700 md:flex">
          {menuOpen ? (
            <RxCross1 className="text-white" onClick={toggleMenu} size={26} />
          ) : (
            <AiOutlineMenu
              className="text-white"
              onClick={toggleMenu}
              size={26}
            />
          )}
        </div>
        <div className="ml-8 hidden flex-row md:flex">
          <AnimatePresence>
            {menuOpen &&
              tabs.map((tab, i) => (
                <motion.button
                  variants={{
                    hidden: (i) => ({
                      opacity: 0,
                      x: -i * 50,
                    }),
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.025,
                      },
                    }),
                  }}
                  custom={i}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  animate="visible"
                  initial="hidden"
                  exit="hidden"
                  className={`${
                    activeTab === tab.id ? "" : "hover:text-white/70"
                  }
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
                </motion.button>
              ))}
          </AnimatePresence>
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
          <NavbarMenu visible={mobileMenuOpen} />
        </div>
        <div className="ml-auto">
          <div
            onClick={toggleColorMode}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white"
          >
            {mode === "dark" ? <BsMoon size={24} /> : <BsSun size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
