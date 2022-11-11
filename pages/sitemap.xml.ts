// pages/sitemap.xml.ts

import { GetServerSideProps } from "next/types";
import { sitemapGenerator } from "@suncel/nextjs";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return sitemapGenerator(ctx);
};

export default Sitemap;
