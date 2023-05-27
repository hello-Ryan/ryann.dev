import React from "react";
import { NavbarMenuItem } from "@/components";

export interface NavbarMenuProps {
  visible?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col rounded-lg bg-zinc-800 py-5">
      <div className="flex flex-col gap-2">
        <NavbarMenuItem label="Home" />
        <NavbarMenuItem label="Experience" />
        <NavbarMenuItem label="Projects" />
        <NavbarMenuItem label="Socials" />
        <NavbarMenuItem label="Contact Me" />
      </div>
    </div>
  );
};

export default NavbarMenu;
