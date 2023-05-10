import React, {useEffect} from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct"

const SimilarProducts = ({product}) => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
  const [filterProducts, getProductByCategory] = useFetch(url)

  useEffect(() => {
    if (product) {
      getProductByCategory()
    }
  }, [product])

  return (
    <section>
      <h2>Discover similar products</h2>
      <div>
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
