import React from "react";

export interface NavbarItemProps {
  label: string;
  selected?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, selected }) => {
  return (
    <div
      className={`cursor-pointer rounded-full px-4 py-2 text-2xl font-semibold text-white transition duration-150 hover:bg-gray-200 hover:text-zinc-900 ${
        selected ? "rounded-full bg-gray-200 text-zinc-900" : ""
      }`}
    >
      {label}
    </div>
  );
};

export default NavbarItem;
