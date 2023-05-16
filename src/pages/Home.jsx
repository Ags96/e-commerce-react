import React, {useRef, useState} from "react"
import {useSelector} from "react-redux"
import CardProduct from "../components/Home/CardProduct"
import "./styles/home.css"
import FilterCategory from "../components/FilterCat/FilterCategory"
import FilterByPrice from "../components/Home/FilterByPrice"
import Footer from "../components/shared/Footer"


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
        <div className="input__search-container">
        <input className="input__search-products" ref={input} onChange={handleChangeInput} type="text" placeholder="what are you looking for?" />
        <button className="search__input-btn"><i className='bx bx-search btn__search-p'></i></button>
        </div>
        <section className="filter__section show__filter__section">
            <FilterCategory />
            <FilterByPrice setFromTo={setFromTo} />
          </section>
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
