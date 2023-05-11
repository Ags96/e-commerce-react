import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import useFetch from "../hooks/useFetch"
import ProductIdInfo from "../components/ProductId/ProductIdInfo"
import SliderImgs from "../components/ProductId/SliderImgs"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import "./styles/productId.css"

const ProductId = () => {
  const {id} = useParams()

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [id])

  return (
    <div>
      <div className="slider__info-container">
        <SliderImgs product={product} />
        <ProductIdInfo product={product} />
      </div>
      <SimilarProducts product={product} />
    </div>
  )
}

export default ProductId
