import React from "react";
import { RichTextType, SuncelBlock } from "@suncel/nextjs";
import { Section } from "../wrappers/section";
import { CustomRichText } from "../wrappers/richtext";

type RichTextBlockProps = {
  richText: RichTextType;
};

export const RichTextBlock: SuncelBlock<RichTextBlockProps> = ({ richText }) => {
  return (
    <Section variant='blog'>
      <CustomRichText value={richText} slug='richText' />
    </Section>
  );
};

RichTextBlock.suncel = {
  slug: "RichTextBlock",
  displayName: "RichText Block",
  defaultProps: {
    richText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repudiandae aperiam explicabo voluptatibus, rerum esse expedita a dicta ab sapiente nihil aliquid quis est similique nisi, excepturi recusandae consequuntur quidem`,
  },
  editor: {
    settings: [],
  },
};
