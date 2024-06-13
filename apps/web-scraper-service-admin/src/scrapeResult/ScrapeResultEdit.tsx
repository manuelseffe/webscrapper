import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";
import { UrlTitle } from "../url/UrlTitle";

export const ScrapeResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="keyword.id" reference="Keyword" label="Keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <TextInput label="result" multiline source="result" />
        <ReferenceInput source="url.id" reference="Url" label="URL">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
