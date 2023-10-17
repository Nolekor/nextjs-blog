import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

export const BlogLayoutTwo = ({ blog }) => {
    return (
        <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
            <Link
                href={blog.url_path}
                className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
            >
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className="aspect-square w-full h-full object-cover group-hover:scale-105 transition-all ease duration-300"
                />
            </Link>
            <div className="col-span-12 lg:col-span-8 w-full">
                <span className="inline-block w-full uppercase text-accent font-semibold text-xs sm:text-sm dark:text-accentDark">
                    {blog.tags[0]}
                </span>
                <br />
                <Link
                    href={blog.url_path}
                    className=" my-1 font-semibold text-base sm:text-lg"
                >
                    <h2 className="font-semibold capitalize text-2xl text-dark mt-4 dark:text-light">
                        <span className=" bg-gradient-to-r dark:from-accentDark/50 dark:to-accentDark/50 from-accent/50 to-accent/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <br />
                <span className="inline-block w-full capitalize text-dark/50 dark:text-light/50 font-semibold sm:text-base text-xs">
                    {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};
