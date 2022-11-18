import { GlobalSchema } from "@suncel/nextjs";
import { FooterGlobal } from "./footer";
import { HeaderGlobal } from "./header";

// Add your globals here
export const globalsSchemas: GlobalSchema[] = [HeaderGlobal, FooterGlobal];
