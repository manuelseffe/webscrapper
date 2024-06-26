/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScrapeResultWhereUniqueInput } from "../../scrapeResult/base/ScrapeResultWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScrapeResultUpdateManyWithoutUrlsInput {
  @Field(() => [ScrapeResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScrapeResultWhereUniqueInput],
  })
  connect?: Array<ScrapeResultWhereUniqueInput>;

  @Field(() => [ScrapeResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScrapeResultWhereUniqueInput],
  })
  disconnect?: Array<ScrapeResultWhereUniqueInput>;

  @Field(() => [ScrapeResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScrapeResultWhereUniqueInput],
  })
  set?: Array<ScrapeResultWhereUniqueInput>;
}

export { ScrapeResultUpdateManyWithoutUrlsInput as ScrapeResultUpdateManyWithoutUrlsInput };
