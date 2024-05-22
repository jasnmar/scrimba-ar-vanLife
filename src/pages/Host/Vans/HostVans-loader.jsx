import { getVans } from "../../../utils/api/api";

async function HostVansLoader() {
  const vansData = await getVans("123")
  return vansData
}

export default HostVansLoader