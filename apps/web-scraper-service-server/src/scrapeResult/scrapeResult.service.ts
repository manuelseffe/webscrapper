import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapeResultServiceBase } from "./base/scrapeResult.service.base";

@Injectable()
export class ScrapeResultService extends ScrapeResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
