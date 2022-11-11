import { GlobalSchema } from "@suncel/nextjs";

export const AnnounceBarSchema: GlobalSchema = {
  slug: "announce_bar",
  name: "Announce bar",
  fields: [
    {
      name: "Announce bar",
      type: "group",
      fields: [
        {
          type: "text",
          name: "Text",
          slug: "text",
        },
        {
          type: "checkbox",
          name: "Is active",
          slug: "is_active",
          defaultValue: true,
        },
      ],
    },
  ],
};
