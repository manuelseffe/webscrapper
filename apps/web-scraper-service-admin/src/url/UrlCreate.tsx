import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ScrapeResultTitle } from "../scrapeResult/ScrapeResultTitle";

export const UrlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="scrapeResults"
          reference="ScrapeResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScrapeResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
