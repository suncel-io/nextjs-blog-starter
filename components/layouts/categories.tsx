import { Page } from "@suncel/nextjs/api";
import React from "react";
import { CategoryCard } from "../card/categoryCard";
import { ArticleCardProps } from "./lastArticles";

type CategoriesProps = {
  articles: ArticleCardProps[];
};

export const Categories: React.FC<CategoriesProps> = ({ articles }) => {
  if (!articles || !Array.isArray(articles) || articles?.length == 0) return null;
  return (
    <div className='mb-16'>
      <div className='max-w-screen-sm mx-auto mb-8 text-center lg:mb-16'>
        <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-800 lg:text-5xl dark:text-white'>
          Categories
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          We use an agile approach to test assumptions and connect with the needs of your audience early and often.
        </p>
      </div>
      <div className='container grid grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {articles?.map((article, idx: number) => {
          return <CategoryCard key={idx} {...article} />;
        })}
      </div>
    </div>
  );
};
