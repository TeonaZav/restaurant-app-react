import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { DialogContent } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <HomeIcon /> Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <MenuBookIcon /> Menu
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <ContactMailRoundedIcon /> Contact{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <img src="/images/patterns/pattern-lines.svg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
