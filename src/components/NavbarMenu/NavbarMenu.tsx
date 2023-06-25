import React from "react";
import { NavbarMenuItem } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

export interface NavbarMenuProps {
  visible?: boolean;
  tabs: { id: string }[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ visible, tabs }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col rounded-lg bg-zinc-800 py-5">
      <AnimatePresence>
        <div className="flex flex-col gap-2">
          {tabs.map((tab,i) => (
            <motion.div
            variants={{
                hidden: (i) => ({
                  opacity: 0,
                  y: -i * 50,
                }),
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.025,
                  },
                }),
              }}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={tab.id}
              className="cursor-pointer rounded-full py-3 text-center text-white hover:bg-zinc-600 hover:underline"
            >
              {tab.id}
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default NavbarMenu;
