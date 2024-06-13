import { ScrapeResultWhereInput } from "./ScrapeResultWhereInput";
import { ScrapeResultOrderByInput } from "./ScrapeResultOrderByInput";

export type ScrapeResultFindManyArgs = {
  where?: ScrapeResultWhereInput;
  orderBy?: Array<ScrapeResultOrderByInput>;
  skip?: number;
  take?: number;
};
