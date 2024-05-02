import { useOutletContext } from "react-router-dom"
import "./HostVanDetails.css"

function HostVanDetails() {

  const [van] = useOutletContext()
  return (
    <div className="hostvandetails--main">
      <p className="hostvandetails--descriptive-text"><span className="hostvandetails--labels">Name: </span>{van.name}</p>
      <p className="hostvandetails--descriptive-text"><span className="hostvandetails--labels">Category: </span>{van.type}</p>
      <p className="hostvandetails--descriptive-text"><span className="hostvandetails--labels">Description: </span>{van.description}</p>
    </div>
  )
}


export default HostVanDetails