import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";
import { URL_TITLE_FIELD } from "../url/UrlTitle";

export const ScrapeResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScrapeResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
