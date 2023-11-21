import FractalTree from "@/components/FractalTree";
import Header from "@/components/Header";
import JuliaSet from "@/components/JuliaSet";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FractalTree />

    </>
  );
};

export default Home;
