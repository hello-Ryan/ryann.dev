import React from "react";

export interface NavbarMenuItemProps {
  label: string;
  onClick: () => void;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ label, onClick }) => {
  return (
    <div className="cursor-pointer rounded-full py-3 text-center text-white hover:bg-zinc-600 hover:underline">
      {label}
    </div>
  );
};
export default NavbarMenuItem;
