import { getVan } from "../../utils/api/api";
//import requireAuth from "../../utils/utils";
import { defer } from "react-router-dom";

//async function HostVanLayoutLoader({ request, params }) {
async function HostVanLayoutLoader({ params }) {
  //await requireAuth(request);
  const vanData = getVan(params.id);
  return defer({vanData})
}

export default HostVanLayoutLoader;
