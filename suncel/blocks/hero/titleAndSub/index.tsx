import React from "react";
import { RichTextType, SuncelBlock } from "@suncel/nextjs";
import { RichTextKey } from "@suncel/nextjs/components";
import { CustomRichText } from "@/suncel/wrappers/richtext";
import classes from "./styles.module.scss";

type TitleAndSubProps = {
  title?: RichTextType;
  hasSubtitle: boolean;
  subTitle?: RichTextType;
};

export const TitleAndSub: SuncelBlock<TitleAndSubProps> = ({ title, subTitle, hasSubtitle }) => {
  return (
    <div className={classes?.container}>
      <CustomRichText slug='title' value={title} allowedFeatures={[RichTextKey.MARK_HIGHLIGHT]} />
      {hasSubtitle && (
        <div className='mt-8'>
          <CustomRichText slug='subTitle' value={subTitle} />
        </div>
      )}
    </div>
  );
};

TitleAndSub.suncel = {
  slug: "TitleAndSub",
  displayName: "Title And Sub",
  defaultProps: {
    title: "<h1>Title to feed...</h1>",
    subTitle: "Tagline to feed...",
    hasSubtitle: true,
  },
  editor: {
    settings: [
      {
        type: "checkbox",
        name: "Has subtitle",
        slug: "hasSubtitle",
      },
    ],
  },
};
