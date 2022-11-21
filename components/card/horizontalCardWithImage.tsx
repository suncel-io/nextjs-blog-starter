import { Link } from "@suncel/nextjs/components";
import Image from "next/image";
import { ArticleCardProps } from "../layouts/lastArticles";

export const HorizontalCardWithImage: React.FC<ArticleCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
}) => {
  return (
    <Link
      href={link}
      className='flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <Image
        height={292}
        width={192}
        className='object-cover w-full rounded-tl-lg rounded-bl-lg h-96 md:h-full md:w-96 md:rounded-none md:rounded-l-lg'
        src={imageSrc}
        alt={imageAlt}
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </div>
    </Link>
  );
};
