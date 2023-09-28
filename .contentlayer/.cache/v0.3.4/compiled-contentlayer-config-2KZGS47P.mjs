// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "image"
    },
    isPublished: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    }
    //errore di compiling------------------------------
    //     toc: {
    //         type: "json",
    //         resolve: async (doc) => {
    //             const slugger = new GithubSlugger();
    //             const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
    //             const headings = array(doc.body.raw.matchAll(regularExp)).map(
    //                 ({ groups }) => {
    //                     const flag = groups?.flag;
    //                     const content = groups?.content;
    //                     return {
    //                         level:
    //                             flag?.length == 1
    //                                 ? "one"
    //                                 : flag?.length == 2
    //                                 ? "two"
    //                                 : "three",
    //                         text: content,
    //                         slug: slugger.slug(content),
    //                     };
    //                 }
    //             );
    //             return headings;
    //         },
    //     },
    // -----------------
  }
}));
console.log(Blog);
var codeOptions = {
  theme: "github-dark"
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2KZGS47P.mjs.map