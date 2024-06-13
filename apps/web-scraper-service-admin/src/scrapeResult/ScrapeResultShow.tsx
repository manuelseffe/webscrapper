import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";
import { URL_TITLE_FIELD } from "../url/UrlTitle";

export const ScrapeResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Keyword" source="keyword.id" reference="Keyword">
          <TextField source={KEYWORD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="URL" source="url.id" reference="Url">
          <TextField source={URL_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
