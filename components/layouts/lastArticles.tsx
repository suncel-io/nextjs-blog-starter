import { CardWithImage } from "../card/cardWithImage";
import { HorizontalCardWithImage } from "../card/horizontalCardWithImage";

export interface ArticleCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

interface LastArticlesProps {
  articles: ArticleCardProps[];
}

export const LastArticles: React.FC<LastArticlesProps> = ({ articles }) => {
  if (!articles || !Array.isArray(articles) || articles?.length == 0) return null;
  return (
    <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
      <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>Last articles</h2>
        <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
          drive economic growth.
        </p>
      </div>
      <div className='container grid grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {articles.map((article, idx) => {
          if (idx == 0)
            return (
              <div className='w-full col-span-1 gap-6 sm:col-span-2 md:col-span-3 lg:col-span-4'>
                <HorizontalCardWithImage {...article} key={idx} />
              </div>
            );
          return <CardWithImage {...article} key={idx} />;
        })}
      </div>
    </div>
  );
};
