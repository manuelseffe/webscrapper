import { ScrapeResultCreateNestedManyWithoutKeywordsInput } from "./ScrapeResultCreateNestedManyWithoutKeywordsInput";

export type KeywordCreateInput = {
  keyword?: string | null;
  scrapeResults?: ScrapeResultCreateNestedManyWithoutKeywordsInput;
};
