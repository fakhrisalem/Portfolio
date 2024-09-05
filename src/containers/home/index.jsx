import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

import "./styles.scss";
import MyPdf from "../../resumeSample/Resume_Updated.pdf";
import butterflyImage from "../../images/butterfly.gif";
import flyImage from "../../images/fly.gif";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hi, I'm Mona Fakhri.
          <br />
          Front End Developer
        </h1>
      </div>


      <motion.div
        initial={{ y: 550 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
      </motion.div>

      <div className="contact-me">
        <div className="contact-me__buttons-wrapper">
          <button onClick={() => navigate("/contact")}>Hire Me</button>
          <a href={MyPdf} download="My_File.pdf">
            Download CV
          </a>
        </div>
      </div>

      <div className="butterfly" style={{ backgroundImage: `url(${butterflyImage})` }} />
      <div className="fly" style={{ backgroundImage: `url(${flyImage})` }} />
    </section>
  );
};

export default Home;