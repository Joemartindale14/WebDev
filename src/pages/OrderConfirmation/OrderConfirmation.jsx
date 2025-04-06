import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Countdown starts at 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer); // Clear interval to avoid memory leaks
      clearTimeout(redirectTimer); // Clear timeout if component unmounts
    };
  }, [navigate]);

  return (
    <div className="order-confirmation">
      <div className="order-confirmation-header">
        <h1>Thank You!</h1>
        <p>
          Your order has been successfully placed.<br />You can now collect your items from the gym reception.<br />If there are any issues, please contact us.
        </p>
        <p>You will be directed to the homepage in {countdown} seconds...</p>
      </div>
      <a href="/Merchandise">
        <button>Continue Shopping</button>
      </a>
    </div>
  );
};

export default OrderConfirmation;