import { Check, Link } from "lucide-react";
import React from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import "./Memberships.css";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing_img.webp",
      title: "DIRECT-DEBIT",
      price: "20.00",
      length: "Every",
    },
    {
      imgUrl: "/pricing_img.webp",
      title: "HALF-YEAR",
      price: "120",
      length: "6",
    },
    {
      imgUrl: "/pricing_img.webp",
      title: "YEARLY",
      price: "200",
      length: "12",
    },
  ];
  return (
    <section className="pricing">
      <HeaderContainer imageSrc="/memberships_header_img.webp" title="MEMBERSHIPS" loading="lazy"/>
      <hr />
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} loading="lazy"/>
              <div className="title">
                <h1>{element.title}</h1>
                <h1>MEMBERSHIP</h1>
                <h3>£ {element.price}</h3>
                <p>For {element.length} Month</p>
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

export default Pricing;
