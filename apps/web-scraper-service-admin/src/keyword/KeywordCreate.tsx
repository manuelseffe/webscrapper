import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScrapeResultTitle } from "../scrapeResult/ScrapeResultTitle";

export const KeywordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
        <ReferenceArrayInput
          source="scrapeResults"
          reference="ScrapeResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScrapeResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
