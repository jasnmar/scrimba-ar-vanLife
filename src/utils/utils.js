import { redirect } from "react-router-dom";

async function requireAuth() {
  const auth = localStorage.getItem("loggedin");
  if (!auth) {
    const response = redirect("/login");
    return response;
  }
  return null;
}

export default requireAuth;
