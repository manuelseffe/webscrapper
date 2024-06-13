import { ScrapeResultCreateNestedManyWithoutUrlsInput } from "./ScrapeResultCreateNestedManyWithoutUrlsInput";

export type UrlCreateInput = {
  scrapeResults?: ScrapeResultCreateNestedManyWithoutUrlsInput;
  url?: string | null;
};
