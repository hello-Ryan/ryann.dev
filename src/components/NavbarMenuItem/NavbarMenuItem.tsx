import React from "react";

export interface NavbarMenuItemProps {
  label: string;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ label }) => {
  return <div className="cursor-pointer text-center text-white hover:underline hover:bg-zinc-600 py-3 rounded-full">{label}</div>;
};
export default NavbarMenuItem;