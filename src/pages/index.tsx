import { Navbar, Landing } from "@/components";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Landing className="grow"/>
    </div>
  );
};

export default Home;
