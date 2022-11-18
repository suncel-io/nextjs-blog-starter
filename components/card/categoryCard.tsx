import { Link } from "@suncel/nextjs/components";
import Image from "next/image";
import { ArticleCardProps } from "../layouts/lastArticles";

export const CategoryCard: React.FC<ArticleCardProps> = ({ imageSrc, title, link }) => {
  return (
    <Link href={link}>
      <div className='relative bg-white border border-gray-200 rounded-lg shadow-md sm:max-w-sm dark:bg-gray-800 dark:border-gray-700 h-96'>
        <Image
          height={320}
          width={250}
          className='object-cover w-full h-full rounded-t-lg filter brightness-75 '
          src={imageSrc}
          alt='Article image'
        />

        <button className='absolute text-white rounded-lg left-2/4 -translate-x-2/4 bottom-[50px] bg-primary/90 w-full py-1 transparent'>
          {title}
        </button>
      </div>
    </Link>
  );
};
