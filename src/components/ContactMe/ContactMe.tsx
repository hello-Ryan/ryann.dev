import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { motion } from "framer-motion";

export interface ContactMeProps {
  open: boolean;
  setOpen: () => void;
}

const ContactMe: React.FC<ContactMeProps> = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!open) {
    return null;
  }

  const handleSubmit = () => {
    return null;
  };

  const renderLeft = () => {
    return (
      <div className="w-5/6 rounded-l-md bg-blue-900 p-10">
        <div>
          <p className="text-3xl font-semibold text-white">
            Let&apos;s get in touch
          </p>
        </div>
        <div className="flex flex-col p-10 pl-0">
          <div className="flex flex-col gap-5 pb-10">
            <input
              className="h-20 rounded-md border border-b bg-transparent p-2 font-medium text-white outline-none"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="h-20 rounded-md border bg-transparent p-2 font-medium text-white outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="h-20 rounded-md border bg-transparent p-2 font-medium text-white outline-none"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="justify-bewteen h-15 rounded-md flex items-center justify-between p-3 bg-white hover:bg-gray-300"
            onClick={handleSubmit}
          >
            
            Send <AiOutlineArrowRight />
          </motion.button>

        </div>
        ;
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div className="w-5/6 rounded-r-md bg-blue-950 p-10">
        <div>
          <p className="text-3xl font-semibold text-white">
            Contact Information
          </p>
          <p className="text-xl font-semibold text-gray-500">
            Send me any questions you have
          </p>
        </div>

        <div className="flex flex-col pt-10">
          <div className="flex flex-col gap-10">
            <div>
              <div className="flex flex-row items-center">
                <div className="w-min rounded-full bg-gray-100/20 p-2">
                  <AiOutlineMail
                    size={24}
                    className="h-10 w-10 cursor-pointer text-white"
                  />
                </div>
                <div className="pl-4">
                  <p className="font-mono text-white">
                    Email: ryanleung1029@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 ">
            <div className="w-min rounded-full bg-gray-100/20 p-2">
              <AiFillLinkedin
                size={24}
                className="h-10 w-10 cursor-pointer text-white"
              />
            </div>
            <div className="w-min rounded-full bg-gray-100/20 p-2">
              <AiOutlineInstagram
                size={24}
                className="h-10 w-10 cursor-pointer text-white"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center">
      <div
        className="z-[51] flex h-full w-full flex-row rounded-md md:h-5/6 md:w-4/6"
        onClick={() => null}
      >
        {renderLeft()}
        {renderRight()}
      </div>
    </div>
  );
};

export default ContactMe;

{
  /* */
}
