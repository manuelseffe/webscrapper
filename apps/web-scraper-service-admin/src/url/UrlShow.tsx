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

import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";
import { URL_TITLE_FIELD } from "./UrlTitle";

export const UrlShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="ScrapeResult"
          target="urlId"
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
