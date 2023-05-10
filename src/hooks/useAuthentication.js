import axios from "axios"

const useAuthentication = () => {
  const createNewUser = data => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
    axios
      .post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const loginUser = data => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    axios
      .post(url, data)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data)
      })
      .catch(err => {
        localStorage.removeItem("token")
        console.log(err)
      })
  }

  return {createNewUser, loginUser}
}
export default useAuthentication
