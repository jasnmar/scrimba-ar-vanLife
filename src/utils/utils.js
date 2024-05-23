import { redirect } from "react-router-dom";

async function requireAuth(request = "") {
  const auth = localStorage.getItem("loggedin");
  let redirectString = "";
  if (request.url) {
    redirectString = "?redirectTo=" + new URL(request.url).pathname
  }
  if (!auth) {
    const response = redirect("/login" + redirectString);
    return response;
  }
  return null;
}

export default requireAuth;
