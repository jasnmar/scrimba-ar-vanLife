import { getVan } from "../../utils/api/api";
import requireAuth from "../../utils/utils";

async function HostVanLayoutLoader({ request, params }) {
  await requireAuth(request);
  const vanData = await getVan(params.id);
  return vanData;
}

export default HostVanLayoutLoader;
