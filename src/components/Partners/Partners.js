import React from "react";
import {
  AirBnB,
  Android,
  Apiary,
  Apple,
  Basecamp,
  Ibm,
  Meta,
} from "../imports";
import "./Partners.css";

export const Partners = () => {
  return (
    <div className="partners" id="abt">
      <p className="partners-header">Partners Lorems</p>
      <p className="partners-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dumm
      </p>
      <div className="partners-icon">
        <img src={Apple} alt="Apple" />
        <img src={AirBnB} alt="AirBnB" />
        <img src={Apiary} alt="Apiary" />
        <img src={Meta} alt="Meta" />
        <img src={Android} alt="Android" />
        <img src={Basecamp} alt="Basecamp" />
        <img src={Ibm} alt="Ibm" />
      </div>
      <button>Try For Free</button>
    </div>
  );
};
