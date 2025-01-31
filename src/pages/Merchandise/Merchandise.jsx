import { Check, Link } from "lucide-react";
import React from "react";
import "./Merchandise.css";

const Merchandise = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "DIRECT-DEBIT",
      price: "29.99",
      length: "Rolling",
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEAR",
      price: "174.99",
      length: "6",
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: "339.99",
      length: "12",
    },
  ];
  return (
    <section className="pricing">
      <h2>MERCHANDISE</h2>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>MEMBERSHIP</h1>
                <h3>£ {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Access To All Equipment
                </p>
                <p>
                  <Check /> Changing Room Access
                </p>
                <p>
                  <Check /> Exercise Classes Included
                </p>
                <p>
                  <Check /> Personal Training Support
                </p>
                <p>
                  <Check /> No Joining Fee
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Merchandise;
