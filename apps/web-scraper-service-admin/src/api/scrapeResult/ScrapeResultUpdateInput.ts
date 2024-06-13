import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type ScrapeResultUpdateInput = {
  keyword?: KeywordWhereUniqueInput | null;
  result?: string | null;
  url?: UrlWhereUniqueInput | null;
};
