import { useIsAdmin } from "@suncel/nextjs";
import { CardWithImage } from "../card/cardWithImage";
import { HorizontalCardWithImage } from "../card/horizontalCardWithImage";
import { ArticleCardProps } from "./lastArticles";

interface RelatedArticlesProps {
  articles: ArticleCardProps[];
  isRelatedArticlePage: boolean;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles, isRelatedArticlePage }) => {
  const isAdmin = useIsAdmin();

  if (!articles || !Array.isArray(articles) || articles?.length == 0)
    return isAdmin && isRelatedArticlePage ? (
      <div className='p-4 my-4 font-semibold text-center text-yellow-900 bg-yellow-100 border rounded-lg'>
        If you want to add related articles : go in <strong>Pages</strong> (right side panel), add{" "}
        <strong>Related Articles</strong>, and Save and Refresh to see updates on related articles.
      </div>
    ) : null;
  return (
    <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
      {isAdmin && (
        <div className='p-4 my-4 font-semibold text-center text-yellow-900 bg-yellow-100 border rounded-lg'>
          If you want to add related articles : go in <strong>Pages</strong> (right side panel), add{" "}
          <strong>Related Articles</strong>, and Save and Refresh to see updates on related articles.
        </div>
      )}
      <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>Related articles</h2>
        <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
          drive economic growth.
        </p>
      </div>
      <div className='container grid grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {articles.map((article, idx) => {
          return <CardWithImage {...article} key={idx} />;
        })}
      </div>
    </div>
  );
};
