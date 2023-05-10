import React, {useRef, useState} from "react"
import {useSelector} from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import "./styles/home.css"
import FilterCategory from "../components/FilterCat/FilterCategory"

const Home = () => {
  const [inputValue, setInputValue] = useState("")

  const {productsGlobal} = useSelector(state => state)

  const input = useRef()

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal?.filter(prod =>
    prod.title.toLowerCase().includes(inputValue)
  )

  return (
    <div className="home">
      <input ref={input} onChange={handleChangeInput} type="text" />
      <FilterCategory />
      <div>
        {productFilter?.map(prod => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  )
}

export default Home
