import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div
        className="footer-top"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}"images/homepage/ready-bg-desktop@2x.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="heading-secondary t-white">
          Ready to make a reservation?
        </h2>
        <Link to="/menu">
          <button className="btn btn-transparent">Book a Table </button>
        </Link>
      </div>
      <div className="footer-bottom">
        <div>
          <img src={process.env.PUBLIC_URL + "logo.svg"} className="logo" />
        </div>
        <div className="address">
          <p className="text-light">
            MARTHWAITE, SEDBERGH <br />
            CUMBRIA <br />
            +00 44 123 4567
          </p>
        </div>
        <div className="working-hours">
          <p className="text-light">
            Open Times <br />
            Mon - Fri: 09:00 AM - 10:00 PM <br />
            Sat - Sun: 09:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
