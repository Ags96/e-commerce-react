import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/filterByPrice.css";

const FilterByPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();
  const [filterShow, setFilterShow] = useState(true);

  const submit = (data) => {
    setFromTo(data);
    reset({
      from: "",
      to: "",
    });
  };

  const changeFilterShow = () => {
    setFilterShow(!filterShow);
  };

  return (
    <article>
      <div  className="filter__container">
      <div onClick={changeFilterShow} className="selector__filter">
        <h3 className="filter__title">Price</h3>
        <i
          className={`btn-category-down bx ${
            filterShow ? "bx-chevron-down" : "bx-chevron-up"
          }`}
        ></i>
      </div>
      </div>
      {filterShow && (
        <form className="form__container" onSubmit={handleSubmit(submit)}>
          <div className="from__container">
            <label htmlFor="from">From</label>
            <input className="input__from" {...register("from")} type="number" id="from" />
          </div>
          <div className="to__container">
            <label htmlFor="to">To</label>
            <input className="input__to" {...register("to")} type="number" id="to" />
          </div>
          <button className="filter-btn">Filter Price</button>
        </form>
      )}
    </article>
  );
};

export default FilterByPrice;
