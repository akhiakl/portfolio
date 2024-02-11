import { RequestInfo } from "undici-types";

const fetcher = (resource: RequestInfo, init: RequestInit | undefined) => fetch(resource, init).then(res => res.json())

export default fetcher