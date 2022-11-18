import { GlobalSchema } from "@suncel/nextjs";

export const FooterGlobal: GlobalSchema = {
  slug: "footer",
  name: "Footer",
  fields: [
    {
      type: "image",
      slug: "logo",
      name: "Logo",
    },
    {
      type: "repeatable",
      slug: "columns",
      name: "Column",
      pluralName: "Columns",
      fields: [
        {
          type: "text",
          slug: "label",
          name: "Column label",
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
    },
    {
      type: "object",
      slug: "socialMedia",
      name: "SocialMedia",
      fields: ["facebook", "instagram", "twitter", "github", "dribbble"].map((e) => ({
        type: "text",
        slug: e,
        name: e,
      })),
    },
  ],
};
