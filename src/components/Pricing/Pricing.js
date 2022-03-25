import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing" id="pric">
      <div>
        <p className="pricing-header">Pricing of Lorem</p>
        <p className="pricing-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="pricing-list">
        <p>30 - Days Free Trial</p>
        <p className="price">$10</p>
        <p className="month">/ Month</p>
        <p>Most sketch tools are designed for teams. </p>
        <button>Start Free Trial</button>
      </div>
    </div>
  );
};
