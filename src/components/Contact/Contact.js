import React from "react";
import {
  fbFill,
  inFill,
  MailIcon,
  Map,
  MapIcon,
  MobileIcon,
  twFill,
} from "../imports";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact" id="cntct">
      <p className="contact-header">Contact Us</p>
      <p className="contact-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="social-icons">
        <img src={fbFill} />
        <img src={inFill} />
        <img src={twFill} />
      </div>
      <img className="map" src={Map} />
      <div className="address-icons">
        <p>
          <img src={MapIcon} />
          6386 Lorem St undefined Ipsum, Georgia #12473 United States
        </p>
        <p>
          <img src={MobileIcon} />
          (843) 777-555-444
        </p>
        <p>
          <img src={MailIcon} />
          test.test@example.com
        </p>
      </div>
    </div>
  );
};
