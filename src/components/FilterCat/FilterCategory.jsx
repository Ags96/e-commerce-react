import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "../../store/slices/products.slices";
import "./filterCategory.css";

const FilterCategory = () => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL;
  
  const url = `${URL_BASE}/categories`;

  const dispatch = useDispatch();

  const [categories, getAllCategories] = useFetch(url);
  const [categoryIsShow, setCategoryIsShow] = useState(true);

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url = `${URL_BASE}/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  const changeShowCategory = () => {
    setCategoryIsShow(!categoryIsShow);
  };

  return (
    <article>
      <div onClick={changeShowCategory} className="selector__category">
        <h3 className="category__title">Category</h3>
        <i
          className={`btn-category-down bx ${
            categoryIsShow ? "bx-chevron-down" : "bx-chevron-up"
          }`}
        ></i>
      </div>
      { categoryIsShow && (
      <ul className="category__list">
        <li className="li__product-all" onClick={handleClickAllProducts}>All Products</li>
        {categories?.map((category) => (
          <li
            className="li__product-all"
            onClick={() => handleClickCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
      )}
    </article>
  );
};

export default FilterCategory;
