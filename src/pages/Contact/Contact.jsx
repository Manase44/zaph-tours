import Header from "../../components/Header/Header";
import "./Contact.css";
import { MdEmail, MdLocationPin, MdAccessTimeFilled } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhone, FaFacebook, FaYoutube } from "react-icons/fa6";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-section">
        <h1 className="section-title">contact us</h1>
        <p className="section-subtitle">
          fell free to get in touch with us or follow our socials
        </p>
        <div className="contact-top"></div>
        <div className="contact-map"></div>
        <div className="contact-details">
          <div className="contact-socials">
            <h3>follow our socials</h3>
            <div className="contact-socials-items">
              <a href="" className="social-item" title="Instagram">
                <RiInstagramFill />
              </a>
              <a href="" className="social-item" title="TikTok">
                <AiFillTikTok />
              </a>
              <a href="" className="social-item" title="Facebook">
                <FaFacebook />
              </a>
              <a href="" className="social-item" title="Youtube">
                <FaYoutube />
              </a>
            </div>
            <div className="contact-addresses">
              <a className="address-item" href="tel:+254721324354">
                <span className="social-item-icon">
                  <FaPhone />
                </span>
                <span>+254721324354</span>
              </a>
              <a className="address-item" href="mailto:zaphtours@yahoo.com">
                <span className="social-item-icon">
                  <MdEmail />
                </span>
                <span>zaphtours@yahoo.com</span>
              </a>
              <a className="address-item" href="#">
                <span className="social-item-icon">
                  <MdLocationPin />
                </span>
                <span>
                  Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO
                  65584-5678
                </span>
              </a>
              <div className="open-time">
                <p className="open-time-header">
                  <span className="social-item-icon">
                    <MdAccessTimeFilled />
                  </span>
                  <span>our openning hours:</span>
                </p>
                <div className="open-time-details">
                <p>
                  <span className="day">Monday to Friday </span>8am to 7pm
                </p>
                <p className="closed-day">Closed on Saturday</p>
                </div>
              </div>
            </div>
          </div>
          INCLUDE THE MAP!!!!!!
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
