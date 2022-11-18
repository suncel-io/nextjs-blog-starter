import React from "react";
import { CardWithImage } from "../card/cardWithImage";
import { ArticleCardProps } from "./lastArticles";

type CategoryArticlesProps = {
  articles: ArticleCardProps[];
};

export const CategoryArticles: React.FC<CategoryArticlesProps> = ({ articles }) => {
  if (!articles || !Array.isArray(articles) || articles?.length == 0) return null;
  return (
    <div className='container grid grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {articles?.map((article, idx: number) => {
        return <CardWithImage key={idx} {...article} />;
      })}
    </div>
  );
};
