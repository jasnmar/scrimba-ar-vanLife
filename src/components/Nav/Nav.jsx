import "./Nav.css"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav className="nav--main">
        <NavLink className="nav--home" to="/">#VANLIFE</NavLink>
        <div className="nav--items">
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="/host">Host</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="/about">About</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="/vans">Vans</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav