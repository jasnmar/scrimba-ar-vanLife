import { getVan } from "../../../utils/api/api";

async function vanDetailLoader({ params }) {

  return getVan(params.id);
}

export default vanDetailLoader