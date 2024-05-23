import "./Error.css"
import { useRouteError } from "react-router-dom"

function Error() {
  const err = useRouteError()
  console.log('err: ', err)
  return (
    <>
      <h1>We are very sorry, something has gone awry</h1>
      <p>{err.message}</p>
    </>
  )
}

export default Error