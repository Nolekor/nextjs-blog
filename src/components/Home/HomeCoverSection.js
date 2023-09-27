import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import React from "react";

export const HomeCoverSection = ({ blogs }) => {
    console.log(blogs);
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh] w-full">
            <Image
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                fill
                className="w-full h-full object-center object-cover rounded-3xl"
            />
        </article>
    );
};
