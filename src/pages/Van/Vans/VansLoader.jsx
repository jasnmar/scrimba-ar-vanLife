import { getVans } from "../../../utils/api/api";
import { defer } from "react-router-dom";

async function vansLoader() {
  const vansDataPromise = getVans();
  return defer({vansData: vansDataPromise})
}

export default vansLoader 