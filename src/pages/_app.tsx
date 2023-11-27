import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});
const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <div className={roboto.className}>
            <Component {...pageProps} />
            <Analytics />
        </div>
    );
};
export default MyApp;
