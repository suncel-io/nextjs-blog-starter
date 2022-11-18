import React from "react";
import { SuncelBlock } from "@suncel/nextjs";
import { Section } from "@/suncel/wrappers/section";
import { Text } from "@suncel/nextjs/components";
import { getUsers, User } from "@suncel/nextjs/api";
import Image from "next/image";

type BlogHeroProps = {
  title: string;
  author: User;
};

export const BlogHero: SuncelBlock<BlogHeroProps> = ({ title, author, pageProps }) => {
  return (
    <Section variant='blog'>
      <header className='mb-4 lg:mb-6 not-format'>
        <address className='flex items-center mb-6 not-italic'>
          <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
            <Image
              className='w-16 h-16 mr-4 rounded-full'
              height={64}
              width={64}
              src={author?.avatar_url || ""}
              alt='Author image'
            />
            <div>
              <div className='text-xl font-bold text-gray-900 dark:text-white'>
                {`${author?.firstname} ${author?.lastname} `}
              </div>
              <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                {`${author?.position} at ${author?.company} `}
              </p>
              <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                <time dateTime={pageProps?.createAt} title={pageProps?.createAt}>
                  {pageProps?.createAt}
                </time>
              </p>
            </div>
          </div>
        </address>
        <Text
          slug='title'
          value={title}
          tagName='h1'
          className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'
        />
      </header>
    </Section>
  );
};

BlogHero.suncel = {
  slug: "BlogHero",
  displayName: "Blog Hero",
  defaultProps: {
    title: "Best practices for successful prototypes",
  },
  editor: {
    settings: [
      {
        type: "select",
        slug: "author",
        name: "Author",
        asyncOptions: async () => {
          const { data: users } = await getUsers();
          return (
            users?.map((user) => ({
              value: user,
              name: `${user.firstname} ${user.lastname} `,
            })) || []
          );
        },
      },
    ],
  },
};
