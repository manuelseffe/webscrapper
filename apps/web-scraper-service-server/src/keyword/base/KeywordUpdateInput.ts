/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ScrapeResultUpdateManyWithoutKeywordsInput } from "./ScrapeResultUpdateManyWithoutKeywordsInput";
import { Type } from "class-transformer";

@InputType()
class KeywordUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyword?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScrapeResultUpdateManyWithoutKeywordsInput,
  })
  @ValidateNested()
  @Type(() => ScrapeResultUpdateManyWithoutKeywordsInput)
  @IsOptional()
  @Field(() => ScrapeResultUpdateManyWithoutKeywordsInput, {
    nullable: true,
  })
  scrapeResults?: ScrapeResultUpdateManyWithoutKeywordsInput;
}

export { KeywordUpdateInput as KeywordUpdateInput };
