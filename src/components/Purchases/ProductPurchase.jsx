import "./styles/purchase.css"

const ProductPurchase = ({prodPurchase}) => {
  return (
    <article className="purchases">
      <img
        className="purchases__img"
        src={prodPurchase.product?.productImgs[0].url}
        alt=""
      />
      <h3 className="purchases__title">{prodPurchase.product.title}</h3>
      <span className="purchases__quantity">{prodPurchase.quantity}</span>
      <span className="purchases__price">
        {prodPurchase.quantity * prodPurchase.product.price}
      </span>
    </article>
  )
}

export default ProductPurchase
