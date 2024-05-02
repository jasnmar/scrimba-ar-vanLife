import "./HostLayout.css"
import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
      <nav className="host--nav-main">
          <div className="host--nav-items">
            <NavLink end className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="">Dashboard</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="income">Income</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="vans">Vans</NavLink>            
            <NavLink className={({isActive})=> isActive ? "activeLink" : "host--nav-item"} to="reviews">Reviews</NavLink>
          </div>
      </nav>
      <Outlet />
    </>
  )
}


export default HostLayout