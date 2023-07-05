import React, {useEffect} from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct"
import './styles/similarProducts.css'

const SimilarProducts = ({product}) => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL;

  const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`
  
  const [filterProducts, getProductByCategory] = useFetch(url)

  useEffect(() => {
    if (product) {
      getProductByCategory()
    }
  }, [product])

  return (
    <section className="similar__products-container">
      <h2 className="similar__products-title">Discover similar products</h2>
      <div className="products__container">
        {filterProducts?.map(prod => {
          if (prod.id !== product.id) {
            return <CardProduct key={prod.id} product={prod} />
          }
        })}
      </div>
    </section>
  )
}

export default SimilarProducts
