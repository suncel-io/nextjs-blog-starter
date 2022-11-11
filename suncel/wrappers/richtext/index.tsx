import React from "react";
import { RichText, RichTextKey, RichTextProps } from "@suncel/nextjs/components";
import classes from "./styles.module.scss";

export const CustomRichText: React.FC<RichTextProps> = ({ featuresHTMLAttributes, ...rest }) => {
  return (
    <RichText
      className={classes.richTextStyle}
      allowedFeatures={[
        RichTextKey.ELEMENT_H1,
        RichTextKey.ELEMENT_H2,
        RichTextKey.ELEMENT_H3,
        RichTextKey.MARK_BOLD,
        RichTextKey.MARK_ITALIC,
        RichTextKey.MARK_CODE,
        RichTextKey.MARK_HIGHLIGHT,
        RichTextKey.ELEMENT_UL,
        RichTextKey.ELEMENT_OL,
        RichTextKey.MARK_LINK,
        RichTextKey.ALIGN_LEFT,
        RichTextKey.ALIGN_CENTER,
        RichTextKey.ALIGN_RIGHT,
        RichTextKey.ALIGN_JUSTIFY,
      ]}
      featuresHTMLAttributes={{
        [RichTextKey.ELEMENT_HEADING]: {
          class: classes.heading,
        },
        [RichTextKey.ELEMENT_UL]: {
          class: classes.customList,
        },
        [RichTextKey.ELEMENT_PARAGRAPH]: {
          class: classes.pStyle,
        },
        ...featuresHTMLAttributes,
      }}
      {...rest}
    />
  );
};
