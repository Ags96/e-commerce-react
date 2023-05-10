import React from "react"
import {useSelector} from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import "./styles/home.css"

const Home = () => {
  const {productsGlobal} = useSelector(state => state)

  console.log(productsGlobal)

  return (
    <div className="products">
      {productsGlobal?.map(prod => (
        <CardProduct key={prod.id} product={prod} />
      ))}
    </div>
  )
}

export default Home
