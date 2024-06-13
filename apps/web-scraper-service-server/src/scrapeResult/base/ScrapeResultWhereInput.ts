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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { KeywordWhereUniqueInput } from "../../keyword/base/KeywordWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlWhereUniqueInput } from "../../url/base/UrlWhereUniqueInput";

@InputType()
class ScrapeResultWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => KeywordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KeywordWhereUniqueInput)
  @IsOptional()
  @Field(() => KeywordWhereUniqueInput, {
    nullable: true,
  })
  keyword?: KeywordWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  result?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UrlWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UrlWhereUniqueInput)
  @IsOptional()
  @Field(() => UrlWhereUniqueInput, {
    nullable: true,
  })
  url?: UrlWhereUniqueInput;
}

export { ScrapeResultWhereInput as ScrapeResultWhereInput };
