import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScrapeResultListRelationFilter } from "../scrapeResult/ScrapeResultListRelationFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
  scrapeResults?: ScrapeResultListRelationFilter;
};
