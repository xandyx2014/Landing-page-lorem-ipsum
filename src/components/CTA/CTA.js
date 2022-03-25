import React from "react";
import { Girl } from "../imports";
import "./CTA.css";

export const CTA = () => {
  return (
    <div className="cta-container">
      <img src={Girl} />
      <div className="cta-group">
        <p className="cta-before">At your Lorem Ipsum</p>
        <p className="cta-header">Mind Blowing fast Lorem</p>
        <p className="cta-desc">Subscribe to our Lorem</p>
        <input placeholder="Your email here" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
