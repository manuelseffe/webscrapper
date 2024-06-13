import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { KEYWORD_TITLE_FIELD } from "./KeywordTitle";
import { URL_TITLE_FIELD } from "../url/UrlTitle";

export const KeywordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="keyword" source="keyword" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ScrapeResult"
          target="keywordId"
          label="ScrapeResults"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Keyword"
              source="keyword.id"
              reference="Keyword"
            >
              <TextField source={KEYWORD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="result" source="result" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="URL" source="url.id" reference="Url">
              <TextField source={URL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
