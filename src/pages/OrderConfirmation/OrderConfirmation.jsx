import React from "react";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h1>Order Confirmed!</h1>
      <p>Thank you for placing your order. You are able to collect your items at the gym reception.</p>
      <a href="/Merchandise">
        <button>Continue Shopping</button>
      </a>
    </div>
  );
};

export default OrderConfirmation;