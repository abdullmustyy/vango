import { getVans } from "../../../api";

export function vansPageLoader() {
  return getVans();
}
