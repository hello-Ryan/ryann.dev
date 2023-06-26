import { Navbar, Landing } from "@/components";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="px-48">
        <Landing className="flex grow flex-col justify-start" />
      </div>
    </div>
  );
};

export default Home;
