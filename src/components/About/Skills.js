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
        <section className="w-full flex flex-col border-b-2 border-solid border-dark text-dark p-20">
            <span className="font-semibold text-4xl text-accent">
                I&apos;m confortable in...
            </span>
            <ul className="flex flex-wrap mt-8 justify-start">
                {SkillList.map((skill) => {
                    return (
                        <li
                            key={skill}
                            className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer"
                        >
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
