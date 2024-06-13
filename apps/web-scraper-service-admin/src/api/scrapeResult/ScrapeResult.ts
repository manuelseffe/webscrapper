import { Keyword } from "../keyword/Keyword";
import { Url } from "../url/Url";

export type ScrapeResult = {
  createdAt: Date;
  id: string;
  keyword?: Keyword | null;
  result: string | null;
  updatedAt: Date;
  url?: Url | null;
};
