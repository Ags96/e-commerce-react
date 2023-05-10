import {useState} from "react"
import useCrudCart from "../../hooks/useCrudCart"
import './styles/productIdInfo.css'

const ProductIdInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const {addProductToCart} = useCrudCart()

  const handlePlus = () => setQuantity(quantity + 1)

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleAddToCart = () => {
    const data = {
      quantity,
      productId: product.id,
    }
    addProductToCart(data)
  }

  return (
    <section className="product__info-container">
      <h3 className="brand__title">{product?.brand}</h3>
      <h2 className="product__title">{product?.title}</h2>
      <p className="product__description">{product?.description}</p>
      <footer className="footer__container">
        <div className="price__quantity-container">
          <div className="price__container">
            <span className="price__title">Price</span>
            <span className="product__price">$ {product?.price}</span>
          </div>
          <div className="quantity__container">
            <span className="quantity__title">Quantity</span>
            <div className="quantity__btn-container">
              <button className="minus__btn" onClick={handleMinus}><i className='bx bx-minus-circle' ></i></button>
              <div className="quantity__data">{quantity}</div>
              <button className="plus__btn" onClick={handlePlus}><i className='bx bx-plus-circle' ></i></button>
            </div>
          </div>
        </div>
        <button className="add__cart-btn" onClick={handleAddToCart}>
          Add to cart <i className="bx bx-cart"></i>
        </button>
      </footer>
    </section>
  )
}

export default ProductIdInfo
