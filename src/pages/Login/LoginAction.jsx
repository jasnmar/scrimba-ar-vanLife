import { loginUser } from "../../utils/api/api";
import { redirect } from "react-router-dom";

async function LoginAction({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const loginData = { email, password }
  
  const retURL = new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const loginResponse = await loginUser(loginData);
    if(loginResponse) {
      localStorage.setItem("loggedin", true);
    }
    return redirect(retURL)
  } catch (err) {
    console.error(err);
    return {
      message: "Error logging in",
      errorText: err
    }
  }
}

export default LoginAction;
