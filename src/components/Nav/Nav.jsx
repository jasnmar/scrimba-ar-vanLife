import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav className="nav--main">
        <Link className="nav--home" to="/">#VANLIFE</Link>
        <div className="nav--items">
          <Link className="nav--item" to="/host">Host</Link>
          <Link className="nav--item" to="/about">About</Link>
          <Link className="nav--item" to="/vans">Vans</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav