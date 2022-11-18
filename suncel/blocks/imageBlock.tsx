import React from "react";
import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Section } from "../wrappers/section";
import { Image } from "@suncel/nextjs/components";

type ImageBlockProps = {
  image: ImageType;
};

export const ImageBlock: SuncelBlock<ImageBlockProps> = ({ image }) => {
  return (
    <Section variant='blog'>
      <div className=''>
        <Image
          slug='image'
          height={360}
          width={640}
          src={image?.src}
          alt={image?.alt || "fallback alt"}
          className='rounded-lg'
        />
      </div>
    </Section>
  );
};

ImageBlock.suncel = {
  slug: "ImageBlock",
  displayName: "Image Block",
  defaultProps: {},
  editor: {
    settings: [],
  },
};
