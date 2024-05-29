import { getVans } from "../../../utils/api/api";

async function vansLoader() {
  const vansData = await getVans();
  return vansData
}

export default vansLoader 