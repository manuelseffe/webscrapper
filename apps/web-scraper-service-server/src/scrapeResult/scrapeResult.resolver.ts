import * as graphql from "@nestjs/graphql";
import { ScrapeResultResolverBase } from "./base/scrapeResult.resolver.base";
import { ScrapeResult } from "./base/ScrapeResult";
import { ScrapeResultService } from "./scrapeResult.service";

@graphql.Resolver(() => ScrapeResult)
export class ScrapeResultResolver extends ScrapeResultResolverBase {
  constructor(protected readonly service: ScrapeResultService) {
    super(service);
  }
}
