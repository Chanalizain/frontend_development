import React from "react";

export default function OrderCard({ product, price, initialQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1); // Increase quantity
    onQuantityChange(1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1); // Decrease quantity if greater than 0
      onQuantityChange(-1);
    }
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrease} disabled={quantity === 0}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
}
