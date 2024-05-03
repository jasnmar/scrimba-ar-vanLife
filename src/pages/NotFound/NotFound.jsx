import "./NotFound.css"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="notfound--container">
    
      <h1 className="notfound--text">Sorry, page you were looking for was not found</h1>
      <Link className="notfound--home-btn" to="/">Return to Home</Link>
    </div>
  )
}

export default NotFound