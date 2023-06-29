import React from "react";
import { RxCross2 } from "react-icons/rx";

export interface ContactMeProps {
  open: boolean;
  setOpen: () => void;
}

const ContactMe: React.FC<ContactMeProps> = ({ open, setOpen }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center">
      <div
        className="z-[51] h-full w-full rounded-md bg-black md:h-[40rem] md:w-[30rem]"
        onClick={() => null}
      >
        <div
          onClick={setOpen}
          className="ml-auto flex justify-between bg-gray-500 p-3"
        >
          <p className="text-5xl text-white">Lets get in touch</p>
          <RxCross2
            size={24}
            className="cursor-pointer rounded-md bg-gray-500 text-black"
          />
        </div>
        <div className="p-5">
          <div className="flex h-44 grow flex-col justify-between">
            <input
              className="border-b bg-transparent text-white outline-none"
              placeholder="Name"
              required
            />
            <input
              className="border-b bg-transparent text-white outline-none"
              placeholder="Email"
              required
            />
            <input
              className="border-b bg-transparent text-white outline-none"
              placeholder="Message"
              required
            />
          </div>
          <button className="h-7 w-full rounded-md bg-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
