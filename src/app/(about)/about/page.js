import { AboutCoverSection } from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import React from "react";

export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: "About Me",
    description: `Here are some details about my self`,
};

export default function About() {
    return (
        <>
            <AboutCoverSection />
            <Skills />
            <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
                Have a project in mind? Reach out to me 📞 from{" "}
                <Link href="/contact" className="!underline underline-offset-2">
                    here
                </Link>{" "}
                and let&apos;s make it happen.
            </h2>
        </>
    );
}
