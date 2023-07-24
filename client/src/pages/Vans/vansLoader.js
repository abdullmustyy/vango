import { getVans, getVanDetail } from "../../../api";

export function vansPageLoader() {
  return getVans();
}

export function vanDetailPageLoader(vanId) {
  return getVanDetail(vanId);
}
