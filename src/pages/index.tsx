import { Navbar, Landing, ContactMe } from "@/components";
import { type NextPage } from "next";
import { useCallback, useState } from "react";

const Home: NextPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleShowModal = useCallback(() => {
    setShowContactForm((current) => !current);
  }, []);

  return (
    <>
      <ContactMe open={showContactForm} setOpen={toggleShowModal} />
      <div className={`${showContactForm ? "bg-gray-800 opacity-40" : ""}`}>
        <div className="flex h-screen flex-col">
          <Navbar toggleForm={toggleShowModal} />
          <div className="px-48">
            <Landing className="flex grow flex-col justify-start" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
