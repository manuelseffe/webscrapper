import { ScrapeResult } from "../scrapeResult/ScrapeResult";

export type Url = {
  createdAt: Date;
  id: string;
  scrapeResults?: Array<ScrapeResult>;
  updatedAt: Date;
  url: string | null;
};
