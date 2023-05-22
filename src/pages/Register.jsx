import React from "react"
import {useForm} from "react-hook-form"
import useAuthentication from "../hooks/useAuthentication"
import defaultRegisterValues from "../utils/defaultRegisterValues"
import "./styles/register.css"
import Footer from "../components/shared/Footer.jsx"

const Register = () => {
  const {register, handleSubmit, reset} = useForm()

  const {createNewUser} = useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
  }

  return (
    <container className="register">
      <form
        className="register__form-container child-1"
        onSubmit={handleSubmit(submit)}
      >
        <h2>Create new user</h2>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register("phone")} type="tel" id="phone" />
        </div>
        <button>Register</button>
      </form>
      <footer className="footer child-2">
        <Footer />
      </footer>
    </container>
  )
}
export default Register
