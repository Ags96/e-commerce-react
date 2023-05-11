import { useState } from "react";
import "./styles/sliderImgs.css";

const SliderImgs = ({ product }) => {
  const [numberImg, setNumberImg] = useState(0);
  const [imgSelected, setImgSelected] = useState(0);

  const objStyle = {
    transform: `translateX(calc(-${numberImg} / 3 * 100%))`,
  };

  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      setNumberImg(2);
      setImgSelected(2);
    } else {
      setNumberImg(numberImg - 1);
      setImgSelected(numberImg - 1);
    }
  };

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0);
      setImgSelected(0);
    } else {
      setNumberImg(numberImg + 1);
      setImgSelected(numberImg + 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider__arrowhead slider__left">
        &lt;
      </button>
      <div style={objStyle} className="slider__interior">
        {product?.images.map((imgInfo) => (
          <div key={imgInfo.id} className="slider__img-container">
            <img className="slider__img" src={imgInfo.url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider__arrowhead slider__right">
        &gt;
      </button>
      <div className="container__footer-slider">
        {product?.images.map((imgInfo, index) => (
          <div key={imgInfo.id} className="small__imgs-container">
            <img
              className={`small__img ${
                index === imgSelected ? "image__active" : ""
              }`}
              src={imgInfo.url}
              alt=""
              onClick={() => {
                setImgSelected(index);
                setNumberImg(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImgs;
