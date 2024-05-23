import { getVans } from "../../../utils/api/api";
import requireAuth from "../../../utils/utils";

async function HostVansLoader() {
  await requireAuth();
  const vansData = await getVans("123");
  return vansData;
}

export default HostVansLoader;
