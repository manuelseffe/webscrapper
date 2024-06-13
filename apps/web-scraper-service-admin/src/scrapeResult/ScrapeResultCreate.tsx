import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";
import { UrlTitle } from "../url/UrlTitle";

export const ScrapeResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="keyword.id" reference="Keyword" label="Keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <TextInput label="result" multiline source="result" />
        <ReferenceInput source="url.id" reference="Url" label="URL">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
