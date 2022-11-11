import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SuncelContext } from "@suncel/nextjs";
import { contentTypes } from "@/suncel/pageSchemas";
import { globalsSchemas } from "@/suncel/globalsSchemas";
import { menuBlocks } from "@/suncel/menuBlocks";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SuncelContext menuBlocks={menuBlocks} contentTypes={contentTypes} globals={globalsSchemas}>
      {getLayout(<Component {...pageProps} />)}
    </SuncelContext>
  );
}

export default MyApp;
