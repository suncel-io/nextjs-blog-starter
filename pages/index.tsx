//
import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { PageRender, getSuncelStaticProps } from "@suncel/nextjs";
import { ContentWrapper } from "@/components/layouts/contentWrapper";
import { Header } from "@/components/layouts/header";
import { getGlobal, getPages } from "@suncel/nextjs/api";
import { Footer } from "@/components/layouts/footer";
import { LastArticles } from "@/components/layouts/lastArticles";
import { Categories } from "@/components/layouts/categories";

export default function Slug(props: any) {
  if (!props?.suncel) return <div>Cannot load the page</div>;

  return <PageRender suncelProps={props?.suncel} />;
}

Slug.getLayout = function getLayout(page: ReactElement) {
  const { header, footer, lastArticles, categoryPages } = page?.props;

  return (
    <ContentWrapper>
      <Header {...header} />
      {page}
      <Categories articles={categoryPages} />
      <LastArticles articles={lastArticles} />
      <Footer {...footer} />
    </ContentWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const suncelProps = await getSuncelStaticProps(ctx);

  if (!suncelProps) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  //Fetch Globals
  const { data: header } = await getGlobal("REPLACE_BY_HEADER_GLOBAL_ID", {
    language: "en",
  });

  const { data: footer } = await getGlobal("REPLACE_BY_FOOTER_GLOBAL_ID", {
    language: "en",
  });

  const { data: lastArticles } = await getPages({
    folder: "REPLACE_BY_BLOG_FOLDER_ID",
    status: "Published",
    folder_depth: 10,
    sort_by: "createdAt",
    order: "desc",
    fields: ["properties", "path"], // in order to optimize the request, we just fetch meta data and the link (path)
  });

  const { data: categoryPages } = await getPages({
    limit: 10,
    sort_by: "createdAt",
    order: "desc",
    includes_folder: false,
    status: "Published",
    content_type: "categoryPage", // or fetch pages using a regex using option "path"
    fields: ["properties", "path"],
  });

  // Return the page props
  return {
    props: {
      // Pass the page props related to Suncel into the suncel prop
      suncel: {
        ...suncelProps,
      },
      header: header?.content || null,
      footer: footer?.content || null,
      lastArticles:
        lastArticles?.pages?.map((page) => ({
          link: page?.path,
          ...page?.properties?.metas?.sns?.facebook,
        })) || [],
      categoryPages:
        categoryPages?.pages?.map((page) => ({
          link: page?.path,
          ...page?.properties?.metas?.sns?.facebook,
        })) || [],
    },
    revalidate: 10,
  };
};
