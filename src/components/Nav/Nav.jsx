import "./Nav.css"
import { NavLink, Link } from "react-router-dom"
import avatar from "../../assets/avatar.png"

function Nav() {
  // function logOut() {
  //   localStorage.removeItem("loggedin")
  // }
  return (
    <>
      <nav className="nav--main">
        <NavLink className="nav--home" to="/">#VANLIFE</NavLink>
        <div className="nav--items">
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="host">Host</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="about">About</NavLink>
          <NavLink className={({isActive})=> isActive ? "activeLink nav--item" : "nav--item"} to="vans">Vans</NavLink>
          <Link to="login" className="login-link"> <img src={avatar} className="login-icon" /></Link>
          {/* <button onClick={logOut}>X</button> */}
        </div>
      </nav>
    </>
  )
}

export default Nav