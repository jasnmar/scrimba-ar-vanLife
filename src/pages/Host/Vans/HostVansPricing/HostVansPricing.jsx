import { useOutletContext } from "react-router-dom"
import "./HostVansPricing.css"

function HostVansPricing() {
  const [van] = useOutletContext()

  return (
    <div className="hostvanspricing--main">
      <p className="hostvanspricing--price">${van.price}<span className="hostvanspricing--day">/day</span></p>
    </div>
  )
}

export default HostVansPricing