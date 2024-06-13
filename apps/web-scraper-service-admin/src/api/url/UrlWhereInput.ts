import { StringFilter } from "../../util/StringFilter";
import { ScrapeResultListRelationFilter } from "../scrapeResult/ScrapeResultListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UrlWhereInput = {
  id?: StringFilter;
  scrapeResults?: ScrapeResultListRelationFilter;
  url?: StringNullableFilter;
};
