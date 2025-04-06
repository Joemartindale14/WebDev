import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <p>Order details not available.</p>;
  }

  return (
    <div className="order-confirmation">
      <h1>Order Confirmed!</h1>
      <p>Thank you for placing your order. You can collect your items at the gym reception.</p>
      <h2>Order Summary</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.productId}>
            <p><strong>Product ID:</strong> {item.productId}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> £{item.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total Price: £{order.totalPrice.toFixed(2)}</h3>
      <a href="/Merchandise">
        <button>Continue Shopping</button>
      </a>
    </div>
  );
};

export default OrderConfirmation;