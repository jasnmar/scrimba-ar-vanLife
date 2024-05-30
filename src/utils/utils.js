import { redirect } from "react-router-dom";

async function requireAuth(request = "") {
  //const auth = localStorage.getItem("loggedin");
  let redirectString = "";
  if (request.url) {
    redirectString = "?redirectTo=" + new URL(request.url).pathname
  }
  const response = redirect(redirectString);
  return response;
}

export default requireAuth;
