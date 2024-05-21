import { Outlet, Navigate, useLocation } from "react-router-dom";

function HostAuth() {
  const auth = localStorage.getItem("loggedin");

  const location = useLocation()
  //console.log('location: ', location)

  return auth ? <Outlet /> : <Navigate to="/login" replace state={{message: "You must log in first", returnURL: location.pathname}} />
}

export default HostAuth