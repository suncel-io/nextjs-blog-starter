import { GlobalSchema } from "@suncel/nextjs";

export const HeaderGlobal: GlobalSchema = {
  slug: "header",
  name: "Header",
  fields: [
    {
      type: "image",
      slug: "logo",
      name: "Logo",
    },
    {
      type: "repeatable",
      slug: "links",
      name: "Link",
      pluralName: "Links",
      fields: [
        {
          type: "text",
          slug: "label",
          name: "Label",
        },
        {
          type: "link",
          slug: "link",
          name: "Link",
        },
      ],
    },
  ],
};

// const result = {
//   logo: {
//     src: "https://cdn.suncel.com/nextjs/nextjs-logo.png",
//   },
//   links: [
//     {
//       label: "blog",
//       link: {
//         href: "/",
//       },
//     },
//     {
//       label: "about",
//       link: {
//         href: "/",
//       },
//     },
//   ],
// };
