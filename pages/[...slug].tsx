//
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { PageRender, getSuncelStaticProps, getSuncelStaticPaths } from "@suncel/nextjs";
import { ContentWrapper } from "@/components/layouts/contentWrapper";
import { Header } from "@/components/layouts/header";
import { getGlobal, getPage, getPages, Page } from "@suncel/nextjs/api";
import { Footer } from "@/components/layouts/footer";
import { RelatedArticles } from "@/components/layouts/relatedArticle";
import { CategoryArticles } from "@/components/layouts/categoryArticles";

export default function Slug(props: any) {
  if (!props?.suncel) return <div>Cannot load the page</div>;

  return <PageRender suncelProps={props?.suncel} />;
}

Slug.getLayout = function getLayout(page: ReactElement) {
  const { header, footer, relatedArticles, categoryArticles, isCategoryPage, isRelatedArticlePage } = page?.props;

  return (
    <ContentWrapper>
      <Header {...header} />
      {page}
      <RelatedArticles articles={relatedArticles} isRelatedArticlePage={isRelatedArticlePage} />
      <CategoryArticles articles={categoryArticles} isCategoryPage={isCategoryPage} />
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

  // Fetch Related Articles
  let relatedArticles: Pick<Page, "status" | "properties" | "path">[] = [];
  if (suncelProps?.page_settings?.related_article?.articles) {
    const relatedArticlesRes: Pick<Page, "status" | "properties" | "path">[] = await Promise.all(
      suncelProps?.page_settings?.related_article?.articles?.map(async (elem: any) => {
        const { data } = await getPage(elem._id, {
          fields: ["properties", "path", "status"],
        });
        return data;
      })
    );
    relatedArticles = relatedArticlesRes.filter((e) => e.status == "Published");
  }

  //Fetch Category pages
  let categoryArticles: Pick<Page, "properties" | "path">[] = [];
  if (suncelProps?.page_settings?.categoryPage?.categoryName) {
    const { data } = await getPages({
      tags: [suncelProps?.page_settings?.categoryPage?.categoryName],
      status: "Published",
      fields: ["properties", "path"],
      sort_by: "updatedAt",
      order: "desc",
    });
    categoryArticles = data?.pages || [];
  }

  //Fetch Globals
  const { data: header } = await getGlobal("REPLACE_BY_HEADER_GLOBAL_ID", {
    language: "en",
  });

  const { data: footer } = await getGlobal("REPLACE_BY_FOOTER_GLOBAL_ID", {
    language: "en",
  });

  // Return the page props
  return {
    props: {
      // Pass the page props related to Suncel into the suncel prop
      suncel: {
        ...suncelProps,
        pageProps: {
          createAt: new Date(suncelProps?.created_at!).toLocaleString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      },
      header: header?.content || null,
      footer: footer?.content || null,
      relatedArticles:
        relatedArticles?.map((page) => ({
          link: page.path,
          ...page.properties.metas?.sns.facebook,
        })) || [],
      categoryArticles:
        categoryArticles?.map((page) => ({
          link: page.path,
          ...page.properties.metas?.sns.facebook,
        })) || [],
      isCategoryPage: suncelProps?.content_type == "categoryPage" || false,
      isRelatedArticlePage: suncelProps?.content_type == "related_article" || false,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const formattedPaths = await getSuncelStaticPaths({
    pageOptions: {
      path: `(?!(^\s$)).*$`,
    },
  });

  return {
    paths: formattedPaths,
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: "blocking",
  };
};
