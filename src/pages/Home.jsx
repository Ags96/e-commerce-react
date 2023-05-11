import React, {useRef, useState} from "react"
import {useSelector} from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import "./styles/home.css"
import FilterCategory from "../components/FilterCat/FilterCategory"
import FilterByPrice from "../components/Home/FilterByPrice"

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  })

  const {productsGlobal} = useSelector(state => state)

  const input = useRef()

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal
    ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    .filter(prod => {
      const from = +fromTo.from
      const to = +fromTo.to
      const price = +prod.price
      if (from && to) {
        return from <= price && price <= to
      }
      if (from && !to) {
        return from <= price
      }
      if (!from && to) {
        return price <= to
      }
      if (!from && !to) {
        return true
      }
    })

  return (
    <div className="home__body">
      <div className="home__filter-category">
        <input ref={input} onChange={handleChangeInput} type="text" />
        <FilterCategory />
        <FilterByPrice setFromTo={setFromTo} />
        <div className="home__products">
          {productFilter?.map(prod => (
            <CardProduct key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
