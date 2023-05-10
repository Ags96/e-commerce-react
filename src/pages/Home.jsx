import React from "react"
import {useSelector} from "react-redux"
import CardProduct from "../components/Home/CardProduct"

const Home = () => {
  const {productsGlobal} = useSelector(state => state)

  console.log(productsGlobal)

  return (
    <div>
      {productsGlobal?.map(prod => (
        <CardProduct key={prod.id} product={prod} />
      ))}
    </div>
  )
}

export default Home
