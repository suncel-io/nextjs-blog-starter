import React from "react";
import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Image, Text } from "@suncel/nextjs/components";
import { Section } from "@/suncel/wrappers/section";

type CategoryHeroProps = {
  tag: string;
  title: string;
  image: ImageType;
};

export const CategoryHero: SuncelBlock<CategoryHeroProps> = ({ image, tag, title }) => {
  return (
    <Section>
      <div className='relative flex items-center justify-center rounded-lg shadow-2xl h-96'>
        <Image
          alt={image?.alt || "Category image"}
          slug='image'
          fill
          src={image?.src}
          className='absolute z-0 object-cover rounded-lg filter blur-xs brightness-50 '
        />
        <div className='z-10 text-center text-white'>
          <Text value={tag} slug='tag' className='mb-4 text-sm font-semibold uppercase shadow-inner' />
          <Text value={title} slug='title' className='text-5xl font-bold shadow-inner' />
        </div>
      </div>
    </Section>
  );
};

CategoryHero.suncel = {
  slug: "CategoryHero",
  displayName: "CategoryHero",
  defaultProps: {
    tag: "Category",
    title: "Travel",
  },
  editor: {
    settings: [],
  },
};
