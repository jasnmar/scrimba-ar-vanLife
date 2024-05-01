import "./HostLayout.css"
import { Link, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="host--nav-main">
          <div className="host--nav-items">
            <Link className="host--nav-item" to="/host">Dashboard</Link>
            <Link className="host--nav-item" to="/host/income">Income</Link>
            <Link className="host--nav-item" to="/host/reviews">Reviews</Link>
          </div>
      </nav>
      <Outlet />
    </>
  )
}


export default HostLayout