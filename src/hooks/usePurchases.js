import axios from "axios"
import {getAllProductsCartThunk} from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import {useDispatch} from "react-redux"
import {useState} from "react"

const usePurchases = () => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"

  const [purchases, setPurchases] = useState()

  const dispatch = useDispatch()

  const buyThisCart = () => {
    axios
      .post(url, {}, getConfigToken())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCartThunk())
      })
      .catch(err => console.log(err))
  }

  const getAllProductsPurchased = () => {
    axios
      .get(url, getConfigToken())
      .then(res => setPurchases(res.data))
      .catch(err => console.log(err))
  }

  return {purchases, buyThisCart, getAllProductsPurchased}
}

export default usePurchases
