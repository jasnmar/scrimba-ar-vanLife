import { useState } from "react";
import "./Login.css";
import { useLocation, useNavigate, Form } from "react-router-dom";


function Login() {
  
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();


  const message = location.state?.message;

  return (
    <div className="login--main">
      <p>{message}</p>
      <h1>Sign in to your account</h1>
      <p>{error?.message}</p>
      <Form method="post" replace className="login--form">
        <input
          name="email"
          className="login--textinput top"
          type="email"
          placeholder="email"
        ></input>
        <input
          name="password"
          className="login--textinput bot"
          type="password"
          placeholder="password"
        ></input>
        <button
          disabled={status === "submitting" ? true : false}
          className="login--signin btn"
        >
          {status === "submitting" ? "Signing In" : "Sign in"}
        </button>
      </Form>
      <p className="login--create-intro">
        Don&#39;t have an account?{" "}
        <span className="login--create-text">Create one now</span>
      </p>
    </div>
  );
}

export default Login;
