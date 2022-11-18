import { ContentTypeSchema } from "@suncel/nextjs";
import { CategoryPage } from "./categoryPage";
import { RelatedArticles } from "./relatedArticles";

// Add your content types here
export const contentTypes: ContentTypeSchema[] = [RelatedArticles, CategoryPage];
