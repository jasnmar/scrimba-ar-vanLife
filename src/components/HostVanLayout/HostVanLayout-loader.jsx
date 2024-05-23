import { getVan } from "../../utils/api/api";
import requireAuth from "../../utils/utils";

async function HostVanLayoutLoader({ params }) {
  await requireAuth();
  const vanData = await getVan(params.id);
  return vanData;
}

export default HostVanLayoutLoader;
