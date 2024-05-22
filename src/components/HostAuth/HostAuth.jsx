import { Outlet, Navigate, useLocation } from "react-router-dom";

function HostAuth() {
  const auth = localStorage.getItem("loggedin");

  const location = useLocation()
  const notLoggedIn = {message: "You must log in first", returnURL: location.pathname}
  return auth ? 
    <Outlet /> : 
    <Navigate to="/login" replace state={notLoggedIn} />
}

export default HostAuth