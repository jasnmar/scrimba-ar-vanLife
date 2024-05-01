import "./HostLayout.css"
import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="host--nav-main">
          <div className="host--nav-items">
            <NavLink end className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="/host">Dashboard</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="/host/income">Income</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="/host/vans">Vans</NavLink>            
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="/host/reviews">Reviews</NavLink>
          </div>
      </nav>
      <Outlet />
    </>
  )
}


export default HostLayout