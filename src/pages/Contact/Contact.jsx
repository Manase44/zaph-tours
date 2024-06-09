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
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390058087!2d36.68257918098845!3d-1.3032035599073157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1717895113398!5m2!1sen!2ske"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
