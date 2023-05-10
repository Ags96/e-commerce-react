import React, {useEffect} from "react"
import useFetch from "../../hooks/useFetch"
import {useDispatch} from "react-redux"
import {getAllProductsThunk} from "../../store/slices/products.slices"
import "./filterCategory.css"

const FilterCategory = () => {
  const dispatch = useDispatch()

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"

  const [categories, getAllCategories] = useFetch(url)

  useEffect(() => {
    getAllCategories()
  }, [])

  const handleClickCategories = id => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
  }

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk())
  }

  return (
    <article className="filter">
      <h3>Category</h3>
      <ul>
        <li onClick={handleClickAllProducts}>All Products</li>
        {categories?.map(category => (
          <li
            onClick={() => handleClickCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FilterCategory
