import { Module } from "@nestjs/common";
import { ScrapeResultModuleBase } from "./base/scrapeResult.module.base";
import { ScrapeResultService } from "./scrapeResult.service";
import { ScrapeResultController } from "./scrapeResult.controller";
import { ScrapeResultResolver } from "./scrapeResult.resolver";

@Module({
  imports: [ScrapeResultModuleBase],
  controllers: [ScrapeResultController],
  providers: [ScrapeResultService, ScrapeResultResolver],
  exports: [ScrapeResultService],
})
export class ScrapeResultModule {}
