import React, { FormEventHandler, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineInstagram,

} from "react-icons/ai";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export interface ContactMeProps {
  open: boolean;
  setOpen: () => void;
}

const ContactMe: React.FC<ContactMeProps> = ({ open, setOpen }) => {
  const form = useRef(null)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!open) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error('No form data')
    }

    emailjs
      .sendForm(
        "service_qftm3qh",
        "template_smg8wrq",
        form.current,
        "IhswmSrdQZXTJVhgc"
      )
      .catch((error) => console.log(error));
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
          <form ref={form} onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-5 pb-10">
              <input
                className="h-20 rounded-md border border-b bg-transparent p-2 font-medium text-white outline-none"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                required
              />
              <input
                className="h-20 rounded-md border bg-transparent p-2 font-medium text-white outline-none"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                required
              />
              <textarea
                className="h-20 rounded-md border bg-transparent p-2 font-medium text-white outline-none"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
              />

              <motion.input
                type="submit"
                whileTap={{ scale: 0.9 }}
                value="Send"
                className="justify-bewteen h-15 flex items-center justify-between rounded-md bg-white p-3 hover:bg-gray-300"
              />
              {/* <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="justify-bewteen h-15 flex items-center justify-between rounded-md bg-white p-3 hover:bg-gray-300"
                >
                  Send <AiOutlineArrowRight />
                </motion.div> */}
            </div>
          </form>
        </div>
        ;
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div className="w-5/6 rounded-r-md bg-blue-950 p-10">
        <span className=" cursor-pointer" onClick={setOpen}>
          <RxCross2
            size={12}
            className="float-right h-10 w-10 rounded-full p-2 text-white hover:bg-blue-900/80"
          />
        </span>
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
      <motion.div
        className="z-[51] flex h-full w-full flex-row rounded-md md:h-5/6 md:w-4/6"
        onClick={() => null}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        animate={{
          opacity: 1,
          boxShadow: "30px 30px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        {renderLeft()}
        {renderRight()}
      </motion.div>
    </div>
  );
};

export default ContactMe;

{
  /* */
}
