import { getVans } from "../../../utils/api/api";
//import requireAuth from "../../../utils/utils";

async function HostVansLoader(request) {
  //await requireAuth(request);
  const vansData = await getVans("123");
  
  return vansData;
}

export default HostVansLoader;
