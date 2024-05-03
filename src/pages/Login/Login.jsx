import "./Login.css"

function Login() {
  return (
    <div className="login--main">
      <h1>Sign in to your account</h1>
      <form className="login--form">
        <input className="login--textinput top" type="email" placeholder="email"></input>
        <input className="login--textinput bot" type="password" placeholder="password"></input>
        <button className="login--signin btn" type="submit">Sign in</button>
      </form>
      <p className="login--create-intro">Don&#39;t have an account? <span className="login--create-text">Create one now</span></p>
    </div>
  )
}

export default Login