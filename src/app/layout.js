import "./globals.css";

import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import { cx } from "@/src/utils";
import { Footer } from "../components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-in",
});
const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mr",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cx(
                    inter.variable,
                    manrope.variable,
                    "font-mr bg-light"
                )}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
