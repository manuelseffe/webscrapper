import { StringFilter } from "../../util/StringFilter";
import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type ScrapeResultWhereInput = {
  id?: StringFilter;
  keyword?: KeywordWhereUniqueInput;
  result?: StringNullableFilter;
  url?: UrlWhereUniqueInput;
};
