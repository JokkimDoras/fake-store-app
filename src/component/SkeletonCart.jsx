import "../skeleton.css";

export default function SkeletonCart() {
  return (
    <div className="cart-container">

      <div className="skeleton skeleton-title"></div>

      {Array(3).fill(0).map((_, i) => (
        <div className="cart-items" key={i}>

          <div className="skeleton skeleton-cart-img"></div>

          <div className="cart-item-details">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
            <div className="skeleton skeleton-price"></div>
          </div>

          <div className="skeleton skeleton-remove-btn"></div>

        </div>
      ))}


      <div className="cart-total">
        <div className="skeleton skeleton-total-text"></div>
        <div className="skeleton skeleton-checkout-btn"></div>
      </div>

    </div>
  );
}