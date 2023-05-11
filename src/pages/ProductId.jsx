import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductIdInfo from "../components/ProductId/ProductIdInfo";
import SliderImgs from "../components/ProductId/SliderImgs";
import SimilarProducts from "../components/ProductId/SimilarProducts";
import "./styles/productId.css";

const ProductId = () => {
  const { id } = useParams();

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
  const [product, getProductById] = useFetch(url);

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <div>
      <div className="home__title-container">
      <h4 className="home__subtitle">
        <Link to={"/"} className="home__link">
          Home
        </Link>
      </h4>
      <span className="red__circle"></span>
      <h4>{product?.title}</h4>
      </div>
      <div className="slider__info-container">
        <SliderImgs product={product} />
        <ProductIdInfo product={product} />
      </div>
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductId;
