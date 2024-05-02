import { useOutletContext } from "react-router-dom"
import "./HostVansPhotos.css"

function HostVansPhotos() {
  const [ van ] = useOutletContext()

  return (
    <>
      <img className="hostvanphotos--image" src={van.imageUrl}></img>
    </>
  )
}

export default HostVansPhotos