import { ContentTypeSchema } from "@suncel/nextjs";

export const RelatedArticles: ContentTypeSchema = {
  slug: "related_article",
  name: "Related article",
  fields: [
    {
      type: "repeatable",
      slug: "articles",
      name: "Article",
      pluralName: "Related Articles",
      fields: [
        {
          type: "page",
          slug: "",
          name: "Article",
          fields: ["_id"],
        },
      ],
    },
  ],
};
