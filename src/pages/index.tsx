import { Navbar, Landing, ContactMe } from "@/components";
import { type NextPage } from "next";
import { useCallback, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Landing className="flex grow flex-col justify-start" />
    </>
  );
};

export default Home;
