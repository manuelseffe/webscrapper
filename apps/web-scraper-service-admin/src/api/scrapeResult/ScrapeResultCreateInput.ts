import { KeywordWhereUniqueInput } from "../keyword/KeywordWhereUniqueInput";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type ScrapeResultCreateInput = {
  keyword?: KeywordWhereUniqueInput | null;
  result?: string | null;
  url?: UrlWhereUniqueInput | null;
};
