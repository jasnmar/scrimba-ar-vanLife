import { useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api/api";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.message;
  let retURL
  if(location.state.returnURL) {
    retURL = location.state.returnURL
  } else {
    retURL = "/host"
  }


  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    async function getLogin(loginData) {
      try {
        const loginResponse = await loginUser(loginData);
        setError(null);
        localStorage.setItem("loggedin", true)
        navigate(retURL, { replace: true })
        return loginResponse;
      } catch (err) {
        setError(err);
      } finally {
        setStatus("idle");
      }
    }
    getLogin(loginFormData).then((response) => {
      console.log("response:", response);
    });
  }

  function handlChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login--main">
      <p>{message}</p>
      <h1>Sign in to your account</h1>
      <p>{error?.message}</p>
      <form onSubmit={handleSubmit} className="login--form">
        <input
          name="email"
          value={loginFormData.email}
          onChange={handlChange}
          className="login--textinput top"
          type="email"
          placeholder="email"
        ></input>
        <input
          name="password"
          value={loginFormData.password}
          onChange={handlChange}
          className="login--textinput bot"
          type="password"
          placeholder="password"
        ></input>
        <button
          disabled={status === "submitting" ? true : false}
          className="login--signin btn"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <p className="login--create-intro">
        Don&#39;t have an account?{" "}
        <span className="login--create-text">Create one now</span>
      </p>
    </div>
  );
}

export default Login;
