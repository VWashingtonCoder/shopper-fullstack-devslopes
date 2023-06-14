const PUBLIC_AUTHORIZATION = process.env.REACT_APP_PUBLIC_AUTHORIZATION;
export const COMMERCE_API_URL = "https://api.chec.io/v1/products";
export const COMMERCE_API_PARAMS = "?limit=25";
export const COMMERCE_API_HEADERS = {
  "X-Authorization": PUBLIC_AUTHORIZATION,
};
