import React from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion/dist/framer-motion";
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Navbar />
      <div className="contact">
        <div
          className="leftSide"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}"/images/homepage/social-events-desktop.jpg")`,
          }}
        ></div>
        <div className="rightSide">
          <img src="/images/patterns/pattern-lines.svg" alt="" />
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit" className="form-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
