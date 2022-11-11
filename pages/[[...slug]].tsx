//
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { PageRender, getSuncelStaticProps, getSuncelStaticPaths } from "@suncel/nextjs";
import { ContentWrapper } from "@/components/layouts/contentWrapper";

export default function Slug(props: any) {
  if (!props?.suncel) return <div>Cannot load the page</div>;

  return <PageRender suncelProps={props?.suncel} />;
}

Slug.getLayout = function getLayout(page: ReactElement) {
  return <ContentWrapper>{page}</ContentWrapper>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const suncelProps = await getSuncelStaticProps(ctx);

  if (!suncelProps) {
    return {
      notFound: true,
    };
  }
  // Return the page props
  return {
    props: {
      // Pass the page props related to Suncel into the suncel prop
      suncel: suncelProps,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const formattedPaths = await getSuncelStaticPaths();

  return {
    paths: formattedPaths,
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: "blocking",
  };
};
