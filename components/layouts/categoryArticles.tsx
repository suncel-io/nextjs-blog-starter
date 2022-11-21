import { useIsAdmin } from "@suncel/nextjs";
import React from "react";
import { CardWithImage } from "../card/cardWithImage";
import { ArticleCardProps } from "./lastArticles";

type CategoryArticlesProps = {
  articles: ArticleCardProps[];
  isCategoryPage: boolean;
};

export const CategoryArticles: React.FC<CategoryArticlesProps> = ({ articles, isCategoryPage }) => {
  const isAdmin = useIsAdmin();

  if (!articles || !Array.isArray(articles) || articles?.length == 0)
    return isAdmin && isCategoryPage ? (
      <div className='p-4 my-4 font-semibold text-center text-yellow-900 bg-yellow-100 border rounded-lg'>
        If you want to add related articles : go in <strong>Pages</strong> (right side panel), select a <strong>Category name</strong>, and Save and Refresh to see updates.
      </div>
    ) : null;

  return (
    <div className='container grid grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {articles?.map((article, idx: number) => {
        return <CardWithImage key={idx} {...article} />;
      })}
    </div>
  );
};
