import HttpRequest from "@nelreina/svelte-ui/utils/http-request";

const API = import.meta.env["VITE_API"];
const STRAPI_NEW_VERSION =
  import.meta.env["VITE_STRAPI_NEW_VERSION"] === "true";

export default HttpRequest(API, STRAPI_NEW_VERSION);


