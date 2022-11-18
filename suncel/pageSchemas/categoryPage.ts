import { ContentTypeSchema } from "@suncel/nextjs";
import { getPagesTags } from "@suncel/nextjs/api";

export const CategoryPage: ContentTypeSchema = {
  slug: "categoryPage",
  name: "Category Page",
  fields: [
    {
      type: "select",
      slug: "categoryName",
      name: "Category Name",
      asyncOptions: async () => {
        // Fetch all the pages tags in your project and generate a select from those values
        return (await getPagesTags())?.data?.tags.map((e) => ({ value: e, name: e })) || [];
      },
    },
  ],
};
