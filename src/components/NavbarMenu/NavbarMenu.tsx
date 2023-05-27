import React from "react";

export interface NavbarMenuProps {
  visible?: boolean;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="fixed ml-[11rem] mt-24 w-52 rounded-lg border-gray-800 bg-zinc-800 px-5 py-5 transition duration-300">
      <div className="flex flex-col">
        <div className="flex cursor-pointer flex-col text-white">Home</div>

        <div className="flex cursor-pointer flex-col text-white">
          Experience
        </div>

        <div className="flex cursor-pointer flex-col text-white">Projects</div>

        <div className="flex cursor-pointer flex-col text-white">Social</div>

        <div className="flex cursor-pointer flex-col text-white">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
