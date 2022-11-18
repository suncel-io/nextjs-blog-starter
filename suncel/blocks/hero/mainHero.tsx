import { CustomRichText } from "@/suncel/wrappers/richtext";
import { RichTextType, SuncelBlock } from "@suncel/nextjs";
import { RichTextKey, Text } from "@suncel/nextjs/components";

interface MainHeroProps {
  tag: string;
  title: RichTextType;
  subTitle: RichTextType;
}

export const MainHero: SuncelBlock<MainHeroProps> = ({ tag, title, subTitle }) => {
  return (
    <section className='py-10 mb-10 bg-gray-100 md:mb-16 dark:bg-gray-500'>
      <div className='container flex items-center justify-center mx-auto'>
        <div className=''>
          <Text
            slug='tag'
            value={tag}
            tagName='span'
            className='font-semibold tracking-wide text-gray-600 uppercase md:-ml-20 dark:bg-text-white dark:text-gray-100'
          />
          <CustomRichText
            slug='title'
            value={title}
            allowedFeatures={[RichTextKey.MARK_HIGHLIGHT]}
            featuresHTMLAttributes={{
              [RichTextKey.ELEMENT_HEADING]: {
                class:
                  "text-[22vw] leading-[24vw] md:text-[14vw] md:leading-[15vw] font-bold text-gray-700 dark:text-white",
              },
              [RichTextKey.MARK_HIGHLIGHT]: {
                class: " bg-transparent text-white blackTextStroke dark:text-gray-800 dark:whiteTextStroke",
              },
            }}
          />
          <div className='flex self-end justify-end '>
            <div className='ml-20'>
              <CustomRichText
                slug='subTitle'
                value={subTitle}
                allowedFeatures={[]}
                featuresHTMLAttributes={{
                  [RichTextKey.ELEMENT_HEADING]: {
                    lass: "text-2xl font-thin tracking-wide text-left text-gray-600 dark:text-gray-100",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainHero.suncel = {
  slug: "MainHero",
  displayName: "Main Hero",
  defaultProps: {
    tag: "A headless blog",
    title: "<h1>Suncel.</h1>",
    subTitle: `<h2>   The best Headless CMS <br /> For Next.js</h2>`,
  },
};
