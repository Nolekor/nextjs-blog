import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

export const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link
            href={link}
            className={cx(
                "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full  border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200 m-2",
                props.className,
                active
                    ? "bg-dark text-light dark:text-dark dark:border-light"
                    : "bg-light text-dark dark:bg-dark dark:text-light"
            )}
        >
            #{name}
        </Link>
    );
};
