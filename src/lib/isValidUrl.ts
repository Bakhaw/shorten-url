import isUrl from "is-url";

function isValidUrl(url: string): boolean {
  return isUrl(url);
}

export default isValidUrl;
