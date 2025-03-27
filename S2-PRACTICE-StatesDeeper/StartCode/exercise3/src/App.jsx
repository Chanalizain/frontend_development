import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleQuantityChange = (index, delta) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += delta;
    if (updatedOrders[index].quantity < 0) updatedOrders[index].quantity = 0; // Prevent negative quantity
    setOrders(updatedOrders);
  };

  // Calculate the total price for all orders
  const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0).toFixed(2);

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
      {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            initialQuantity={order.quantity}
            onQuantityChange={(delta) => handleQuantityChange(index, delta)}
          />
        ))}
      </div>

      <CheckoutButton total={total}></CheckoutButton>
    </>
  );
}
