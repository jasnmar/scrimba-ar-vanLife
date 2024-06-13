import { getVans } from "../../../utils/api/api";
//import requireAuth from "../../../utils/utils";
import { defer } from "react-router-dom";

//async function HostVansLoader({request}) {
async function HostVansLoader() {
  //await requireAuth(request);
  const vansData = getVans("123");
  return defer({vansData})
}

export default HostVansLoader;
