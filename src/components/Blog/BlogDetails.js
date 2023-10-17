import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";
import ViewCounter from "./ViewCounter";

export const BlogDetails = ({ blog, slug: blogSlug }) => {
    return (
        <div className=" px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium max-5 sm:mx-10 rounded-lg">
            <time className="m-3 ">
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
            </time>
            <spam className="m-3 ">
                <ViewCounter slug={blogSlug} />
            </spam>
            <div className="m-3 ">{blog.readingTime.text}</div>
            <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3 ">
                #{blog.tags[0]}
            </Link>
        </div>
    );
};
