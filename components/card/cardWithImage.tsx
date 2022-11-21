import { Link } from "@suncel/nextjs/components";
import Image from "next/image";
import { ArticleCardProps } from "../layouts/lastArticles";

export const CardWithImage: React.FC<ArticleCardProps> = ({ imageSrc, imageAlt, title, description, link }) => {
  return (
    <Link href={link}>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <Image
          height={254}
          width={382}
          className='rounded-t-lg w-full h-[200px] object-cover'
          src={imageSrc}
          alt={imageAlt}
        />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>{description}</p>
          <div className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary-600 dark:focus:ring-primary'>
            Read more
            <svg
              aria-hidden='true'
              className='w-4 h-4 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
