import FractalTree from "@/components/FractalTree";
import Header from "@/components/Header";
import JuliaSet from "@/components/JuliaSet";
import { type NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <div className="flex w-full">
                <FractalTree />

                <div className="text-white">
                  <h1 className="text-3xl">Hello Im Ryan :)</h1>
                </div>
            </div>
        </>
    );
};

export default Home;
