import { ScrapeResult } from "../scrapeResult/ScrapeResult";

export type Keyword = {
  createdAt: Date;
  id: string;
  keyword: string | null;
  scrapeResults?: Array<ScrapeResult>;
  updatedAt: Date;
};
