import React from "react";
import { Browser, Menu } from "../imports";
import "./Feature.css";

const SideMenu = () => {
  return (
    <div className="list">
      <img src={Menu} />
      <p className="list-heading">At your Lorem ipsum</p>
      <p className="list-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry
      </p>
    </div>
  );
};

export const Feature = () => {
  return (
    <div className="feature" id="prdct">
      <div className="feature-top-group">
        <p className="feature-before">At your Lorem ipsum</p>
        <p className="feature-heading">Features</p>
        <p className="feature-after">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
      </div>
      <div className="feature-mid-group">
        <img className="browser" src={Browser} alt="browser" />
        <div className="feature-side-menu">
          <SideMenu />
          <SideMenu />
        </div>
      </div>
      <div className="feature-bottom-group">
        <p className="feature-before">At your Lorem ipsum</p>
        <p className="feature-heading">Amazing fast Lorem</p>
        <p className="feature-after">
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages,
        </p>
        <button className="buynow">Buy now</button>
        <button className="tryfree">Try for free</button>
      </div>
    </div>
  );
};
