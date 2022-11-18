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
    richText: `<blockquote>
      <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
          login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
  </blockquote>`,
  },
  editor: {
    settings: [],
  },
};
