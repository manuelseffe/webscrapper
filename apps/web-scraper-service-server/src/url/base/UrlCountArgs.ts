/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UrlWhereInput } from "./UrlWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UrlCountArgs {
  @ApiProperty({
    required: false,
    type: () => UrlWhereInput,
  })
  @Field(() => UrlWhereInput, { nullable: true })
  @Type(() => UrlWhereInput)
  where?: UrlWhereInput;
}

export { UrlCountArgs as UrlCountArgs };
