import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; 
import "./styles.scss";
import butterflyImage from "../../images/butterfly.gif"; 
import flyImage from "../../images/fly.gif"; 
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input required name="name" className="inputName" type="text" />
              <label htmlFor="name" className="namelabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input required name="email" className="inputEmail" type="email" />
              <label htmlFor="email" className="emaillabel">
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                className="inputDescription"
                rows="5"
                style={{ resize: "none" }} // No comment here
              />
              <label htmlFor="description" className="descriptionlabel">
                Description
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="contact-me__socials-wrapper">
        <a href="https://www.linkedin.com/in/mona-fakhri-salem-998191262" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <div className="butterfly" style={{ backgroundImage: `url(${butterflyImage})` }} />
      <div className="fly" style={{ backgroundImage: `url(${flyImage})` }} />
      </div>
    </section>
  );
};

export default Contact;