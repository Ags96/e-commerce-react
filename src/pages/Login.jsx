import React from "react";
import useAuthentication from "../hooks/useAuthentication";
import "./styles/login.css";

const Login = () => {
  const { loginUser } = useAuthentication();

  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginUser(data);
  };

  return (
    <section className="login__container">
      <form className="login__form" onSubmit={handlelogin}>
        <h1 className="login__title">Welcome! Enter your email and password to continue</h1>
        <h2 className="form__title">Login</h2>
        <div className="email__container">
          <label className="label__email" htmlFor="email">Email</label>
          <input className="input__email" type="email" id="email" />
        </div>
        <div className="password__container">
          <label className="label__password" htmlFor="password">Password</label>
          <input className="input__password" type="password" id="password" />
        </div>
        <button className="login__login-btn">Sign in</button>
      </form>
    </section>
  );
};

export default Login;
