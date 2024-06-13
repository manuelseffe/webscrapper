/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ScrapeResult } from "./ScrapeResult";
import { ScrapeResultCountArgs } from "./ScrapeResultCountArgs";
import { ScrapeResultFindManyArgs } from "./ScrapeResultFindManyArgs";
import { ScrapeResultFindUniqueArgs } from "./ScrapeResultFindUniqueArgs";
import { CreateScrapeResultArgs } from "./CreateScrapeResultArgs";
import { UpdateScrapeResultArgs } from "./UpdateScrapeResultArgs";
import { DeleteScrapeResultArgs } from "./DeleteScrapeResultArgs";
import { Keyword } from "../../keyword/base/Keyword";
import { Url } from "../../url/base/Url";
import { ScrapeResultService } from "../scrapeResult.service";
@graphql.Resolver(() => ScrapeResult)
export class ScrapeResultResolverBase {
  constructor(protected readonly service: ScrapeResultService) {}

  async _scrapeResultsMeta(
    @graphql.Args() args: ScrapeResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ScrapeResult])
  async scrapeResults(
    @graphql.Args() args: ScrapeResultFindManyArgs
  ): Promise<ScrapeResult[]> {
    return this.service.scrapeResults(args);
  }

  @graphql.Query(() => ScrapeResult, { nullable: true })
  async scrapeResult(
    @graphql.Args() args: ScrapeResultFindUniqueArgs
  ): Promise<ScrapeResult | null> {
    const result = await this.service.scrapeResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ScrapeResult)
  async createScrapeResult(
    @graphql.Args() args: CreateScrapeResultArgs
  ): Promise<ScrapeResult> {
    return await this.service.createScrapeResult({
      ...args,
      data: {
        ...args.data,

        keyword: args.data.keyword
          ? {
              connect: args.data.keyword,
            }
          : undefined,

        url: args.data.url
          ? {
              connect: args.data.url,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ScrapeResult)
  async updateScrapeResult(
    @graphql.Args() args: UpdateScrapeResultArgs
  ): Promise<ScrapeResult | null> {
    try {
      return await this.service.updateScrapeResult({
        ...args,
        data: {
          ...args.data,

          keyword: args.data.keyword
            ? {
                connect: args.data.keyword,
              }
            : undefined,

          url: args.data.url
            ? {
                connect: args.data.url,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ScrapeResult)
  async deleteScrapeResult(
    @graphql.Args() args: DeleteScrapeResultArgs
  ): Promise<ScrapeResult | null> {
    try {
      return await this.service.deleteScrapeResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Keyword, {
    nullable: true,
    name: "keyword",
  })
  async getKeyword(
    @graphql.Parent() parent: ScrapeResult
  ): Promise<Keyword | null> {
    const result = await this.service.getKeyword(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Url, {
    nullable: true,
    name: "url",
  })
  async getUrl(@graphql.Parent() parent: ScrapeResult): Promise<Url | null> {
    const result = await this.service.getUrl(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}