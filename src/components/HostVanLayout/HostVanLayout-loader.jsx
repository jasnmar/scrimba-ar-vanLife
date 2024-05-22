import { getVan } from "../../utils/api/api"

async function HostVanLayoutLoader({ params }) {
  const vanData = await getVan(params.id);
  return vanData
}

export default HostVanLayoutLoader