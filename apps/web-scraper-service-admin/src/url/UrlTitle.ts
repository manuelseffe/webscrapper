import { Url as TUrl } from "../api/url/Url";

export const URL_TITLE_FIELD = "url";

export const UrlTitle = (record: TUrl): string => {
  return record.url?.toString() || String(record.id);
};
