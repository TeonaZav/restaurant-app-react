import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import FooterBottom from "../components/FooterBottom";
import { motion } from "framer-motion/dist/framer-motion";
function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="menu">
        <h1 className="heading-secondary">Most Popular</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
        <FooterBottom />
      </div>
    </motion.div>
  );
}

export default Menu;
