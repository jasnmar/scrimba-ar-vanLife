import { defer } from "react-router-dom"
import { getVans } from "../../../utils/api/api";


//async function loader({ request }) {
async function dashboardLoader() {
  //await requireAuth(request)
  const vansData = getVans("123");
  return defer({ vansData })

}

export default dashboardLoader