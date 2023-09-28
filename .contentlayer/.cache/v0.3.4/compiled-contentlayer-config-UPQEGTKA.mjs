// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
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
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UPQEGTKA.mjs.map
