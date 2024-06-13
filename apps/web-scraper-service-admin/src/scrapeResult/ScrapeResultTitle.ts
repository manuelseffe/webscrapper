import { ScrapeResult as TScrapeResult } from "../api/scrapeResult/ScrapeResult";

export const SCRAPERESULT_TITLE_FIELD = "id";

export const ScrapeResultTitle = (record: TScrapeResult): string => {
  return record.id?.toString() || String(record.id);
};
