import React from "react"
import {useForm} from "react-hook-form"
import useAuthentication from "../hooks/useAuthentication"
import defaultRegisterValues from "../utils/defaultRegisterValues"
import "./styles/register.css"

const Register = () => {
  const {register, handleSubmit, reset} = useForm()

  const {createNewUser} = useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
  }

  return (
    <section className="register__container">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <h2 className="register__title">Create new user</h2>
        <div className="register__item">
          <label className="register__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="register__input"
            {...register("firstName")}
            type="text"
            id="firstName"
          />
        </div>
        <div className="register__item">
          <label className="register__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="register__input"
            {...register("lastName")}
            type="text"
            id="lastName"
          />
        </div>
        <div className="register__item">
          <label className="register__label" htmlFor="email">
            Email
          </label>
          <input
            className="register__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="register__item">
          <label className="register__label" htmlFor="password">
            Password
          </label>
          <input
            className="register__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="register__item">
          <label className="register__label" htmlFor="phone">
            Phone
          </label>
          <input
            className="register__input"
            {...register("phone")}
            type="tel"
            id="phone"
          />
        </div>
        <button className="register__btn">Register</button>
      </form>
    </section>
  )
}
export default Register
