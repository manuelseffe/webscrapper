import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScrapeResultTitle } from "../scrapeResult/ScrapeResultTitle";

export const KeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
