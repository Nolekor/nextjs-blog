import React from "react";

export default function Skills() {
    const SkillList = [
        "next.js",
        "tailwind css",
        "figma",
        "javaScript",
        "web design",
        "Gatsby.js",
        "strapi",
        "firebase",
        "generative AI",
        "wireframing",
        "SEO",
        "framer motion",
        "sanity",
    ];
    return (
        <section className="w-full flex flex-col border-b-2 border-solid border-dark dark:border-light dark:text-light text-dark md:p-16 sm:p-12 xs:p-10 p-5 lg:p-20">
            <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
                I&apos;m confortable in...
            </span>
            <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
                {SkillList.map((skill) => {
                    return (
                        <li
                            key={skill}
                            className="font-semibold inline-block capitalize text-base sm:text-lg md:text-2xl xs:py-3 sm:py-4 lg:py-5 py-2 ps-4 xs:ps-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
                        >
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
