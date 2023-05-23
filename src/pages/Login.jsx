import React from "react"
import useAuthentication from "../hooks/useAuthentication"
import "./styles/login.css"

const Login = () => {
  const {loginUser} = useAuthentication()

  const handlelogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const data = {email, password}
    loginUser(data)
  }

  return (
    <section className="login__container">
      <form className="login__form" onSubmit={handlelogin}>
        <h1 className="login__title">
          Welcome! Enter your email and password to continue
        </h1>

        <div className="form__item">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input className="form__input" type="email" id="email" />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input className="form__input" type="password" id="password" />
        </div>
        <button className="login__login-btn">Sign in</button>
      </form>
    </section>
  )
}

export default Login
