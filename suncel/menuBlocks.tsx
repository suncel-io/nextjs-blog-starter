import { MenuBlockSchema } from "@suncel/nextjs";
import { BlogHero } from "./blocks/hero/blogHero";
import { CategoryHero } from "./blocks/hero/categoryHero";
import { MainHero } from "./blocks/hero/mainHero";
import { TitleAndSub } from "./blocks/hero/titleAndSub";
import { ImageBlock } from "./blocks/imageBlock";
import { RichTextBlock } from "./blocks/richTextBlock";

export const menuBlocks: MenuBlockSchema[] = [
  {
    category: "Page blocks",
    blocks: [
      {
        name: "Hero",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",
            component: TitleAndSub,
            name: "Title And Sub Hero",
            description: "A simple title and one optional subtitle",
          },
          {
            component: MainHero,
            name: MainHero?.suncel?.displayName,
            image: 'https://assets.suncel.io/635a70f68256da119616b1b5/zVFeC-mainHero.png',
          },
          {
            component: BlogHero,
            name: BlogHero?.suncel?.displayName,
            image: 'https://assets.suncel.io/635a70f68256da119616b1b5/6ttPM-blogHeroAuthor.png'
          },
          {
            component: CategoryHero,
            name: CategoryHero?.suncel?.displayName,
            image: 'https://assets.suncel.io/635a70f68256da119616b1b5/hoL0f-categoryHero.png'
          },
        ],
      },
      {
        name: "Text",
        variants: [
          {
            component: RichTextBlock,
            name: RichTextBlock?.suncel?.displayName,
            image: 'https://assets.suncel.io/635a70f68256da119616b1b5/o7zWp-richText.png',
          },
        ],
      },
      {
        name: "Media",
        variants: [
          {
            component: ImageBlock,
            name: ImageBlock?.suncel?.displayName,
            image: 'https://assets.suncel.io/635a70f68256da119616b1b5/YMpCF-simpleImage.png'
          },
        ],
      },
    ],
  },
];
