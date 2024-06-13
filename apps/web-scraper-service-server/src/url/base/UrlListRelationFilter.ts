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
import { UrlWhereInput } from "./UrlWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UrlListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UrlWhereInput,
  })
  @ValidateNested()
  @Type(() => UrlWhereInput)
  @IsOptional()
  @Field(() => UrlWhereInput, {
    nullable: true,
  })
  every?: UrlWhereInput;

  @ApiProperty({
    required: false,
    type: () => UrlWhereInput,
  })
  @ValidateNested()
  @Type(() => UrlWhereInput)
  @IsOptional()
  @Field(() => UrlWhereInput, {
    nullable: true,
  })
  some?: UrlWhereInput;

  @ApiProperty({
    required: false,
    type: () => UrlWhereInput,
  })
  @ValidateNested()
  @Type(() => UrlWhereInput)
  @IsOptional()
  @Field(() => UrlWhereInput, {
    nullable: true,
  })
  none?: UrlWhereInput;
}
export { UrlListRelationFilter as UrlListRelationFilter };