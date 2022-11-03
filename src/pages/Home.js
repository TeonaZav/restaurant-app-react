import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import MainTextbox from "../components/MainTextbox";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion/dist/framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Navbar />
      <div className="home">
        <div
          className="home-top"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}"/images/homepage/hero-bg-desktop@2x.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "top center",
          }}
        >
          <Hero />
        </div>
        <section className="section-1">
          <div className="container section-1-cont">
            <div className="step step-1">
              <div className="img-box img-box-1">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/homepage/enjoyable-place-desktop@2x.jpg"
                  }
                  className="step-img step-img-left"
                  alt="enjoyable-place"
                />
              </div>

              <MainTextbox
                heading="Enjoyable place for all the family"
                text="Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal."
                additional="text-box-right"
                textColor="t-main"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/patterns/pattern-curve-top-right.svg"
                }
                alt="pattern"
                className="pattern-1"
              />
            </div>
            <div className="step step-2">
              <MainTextbox
                heading="The most locally sourced food"
                text="All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food."
                additional="text-box-left"
                textColor="t-main"
              />
              <div className="img-box img-box-2">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/homepage/locally-sourced-desktop@2x.jpg"
                  }
                  className="step-img step-img-right"
                  alt="locally-sourced"
                />
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/patterns/pattern-curve-top-left.svg"
                }
                alt="pattern"
                className="pattern-2"
              />
            </div>
          </div>
        </section>
        <Highlights />
        <Events />
        <Footer />
      </div>
    </motion.div>
  );
}

export default Home;
