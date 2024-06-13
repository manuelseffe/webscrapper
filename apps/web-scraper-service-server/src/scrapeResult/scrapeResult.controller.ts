import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrapeResultService } from "./scrapeResult.service";
import { ScrapeResultControllerBase } from "./base/scrapeResult.controller.base";

@swagger.ApiTags("scrapeResults")
@common.Controller("scrapeResults")
export class ScrapeResultController extends ScrapeResultControllerBase {
  constructor(protected readonly service: ScrapeResultService) {
    super(service);
  }
}
