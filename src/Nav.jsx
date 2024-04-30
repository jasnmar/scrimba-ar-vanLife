import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <nav>
        <Link className="nav--home" to="/">#VANLIFE</Link>
        <Link className="nav--about" to="/about">About</Link>
      </nav>
    </>
  )
}

export default Nav