import { SortOrder } from "../../util/SortOrder";

export type ScrapeResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keywordId?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
  urlId?: SortOrder;
};
