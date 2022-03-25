import React from "react";
import { Logo, Mac } from "../imports";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header" id="home">
      <div className="navbar">
        <img className="logo" alt="logo" src={Logo} />
        <a href="#home">Home</a>
        <a href="#prdct">Product</a>
        <a href="#pric">Pricing</a>
        <a href="#abt">About</a>
        <a href="#cntct">Contact</a>
        <input className="email" type="email" placeholder="Your email here" />
        <button>Subscribe</button>
      </div>
      <div className="header-group">
        <p className="header-before">What is Lorem Ipsum?</p>
        <p className="header-heading">Why do we use it?</p>
        <p className="header-after">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button>Try For Free</button>
        <img className="mac" src={Mac} alt="mac" />
      </div>
    </div>
  );
};
