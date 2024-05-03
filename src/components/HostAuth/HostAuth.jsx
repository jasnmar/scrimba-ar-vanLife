import { Outlet, Navigate } from "react-router-dom";

function HostAuth() {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default HostAuth