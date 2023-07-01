import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { useCallback, useState } from "react";
import { ContactMe, Navbar } from "@/components";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleShowModal = useCallback(() => {
    setShowContactForm((current) => !current);
  }, []);

  return (
    <>
      <>
        <ContactMe open={showContactForm} setOpen={toggleShowModal} />
        <div className={`${showContactForm ? "bg-gray-800 opacity-40" : ""}`}>
          <div className="flex h-screen flex-col">
            <Navbar toggleForm={toggleShowModal} />
            <div className="px-48">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </>

      <Analytics />
    </>
  );
};
export default MyApp;
