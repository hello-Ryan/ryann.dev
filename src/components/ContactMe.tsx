import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ContactMeProps {
  open: boolean;
  setOpen: () => void;
}

const ContactMe: React.FC<ContactMeProps> = ({ open, setOpen }) => {
  const form = useRef(null);

  if (!open) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("No form data");
    }

    const handleSuccess = () => {
      const f = document.getElementById("contact_form") as HTMLFormElement;
      toast.success("Email sent and received!");
      f.reset();
    };

    emailjs
      .sendForm(
        "service_qftm3qh",
        "template_smg8wrq",
        form.current,
        "IhswmSrdQZXTJVhgc"
      )
      .then((res) =>
        res.status === 200
          ? handleSuccess()
          : toast.error("Email failed to sent, please try again later.")
      )
      .catch(() =>
        toast.error("Email failed to sent, please try again later.")
      );
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
          <form ref={form} onSubmit={(e) => handleSubmit(e)} id="contact_form">
            <div className="flex flex-col gap-1 pb-10">
              <div className="flex flex-col">
                <label className="p-2 pl-0 text-white">Name</label>
                <input
                  className="rounded-md border border-b border-slate-400 bg-transparent p-2 font-medium text-white outline-none"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="p-2 pl-0 text-white">Email</label>
                <input
                  className="rounded-md border border-slate-400 bg-transparent p-2 font-medium text-white outline-none"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="p-2 pl-0 text-white">Message</label>
                <textarea
                  className="h-56 max-h-56 resize-none rounded-md border border-slate-400 bg-transparent p-2 font-medium text-white outline-none"
                  name="message"
                  required
                />
              </div>
            </div>
            <motion.input
              type="submit"
              whileTap={{ scale: 0.9 }}
              value="Send"
              className="justify-bewteen h-15  inline-block w-full cursor-pointer 
                rounded-md bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
            />
          </form>
        </div>
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

        <div className="flex h-5/6 flex-col justify-between pt-10">
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
                    Email:{" "}
                    <p
                      className="inline hover:cursor-pointer"
                      onClick={() => {
                        void navigator.clipboard.writeText(
                          "ryanleung1029@gmail.com"
                        );
                        toast("Copied to clipboard!");
                      }}
                    >
                      ryanleung1029@gmail.com
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="w-min rounded-full bg-gray-100/20 p-2">
              <a
                href="https://www.linkedin.com/in/ryan-leung-59774b195/"
                target="_blank"
              >
                <AiFillLinkedin
                  size={24}
                  className="h-10 w-10 cursor-pointer text-white"
                />
              </a>
            </div>
            <div className="w-min rounded-full bg-gray-100/20 p-2">
              <a href="https://github.com/hello-Ryan" target="_blank">
                <AiFillGithub
                  size={24}
                  className="h-10 w-10 cursor-pointer text-white"
                />
              </a>
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
        <ToastContainer theme="dark" />
      </motion.div>
    </div>
  );
};

export default ContactMe;
