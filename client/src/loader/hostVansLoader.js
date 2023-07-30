import { getHostVans, getHostVanDetail } from "../../api";

export function hostVansPageLoader() {
  return getHostVans();
}

export function hostVanDetailPageLoader(vanId) {
  return getHostVanDetail(vanId);
}
