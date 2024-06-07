import Header from "../../components/Header/Header";
import "./Contact.css";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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
        <div className="contact-section-details">
          <div className="contact-socials">
            <h3>follow our socials</h3>
            <div className="contact-socials-items">
              <a className="social-item" href="tel:+254721324354">
                <span className="social-item-icon"><FaPhone /></span>
                <span>+254721324354</span>
              </a>
              <a className="social-item" href="mailto:zaphtours@yahoo.com">
                <span className="social-item-icon"><MdEmail /></span>
                 <span>zaphtours@yahoo.com</span>
              </a>
              <a className="social-item" href="#">
                <span className="social-item-icon"><MdLocationPin /></span>
                <span>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</span>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form action="#" className="form">
              <div className="form-input">
                <label htmlFor="contactName">full name</label>
                <input
                  type="text"
                  name="contactName"
                  id="contactName"
                  placeholder="e.g Manase Gunga"
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="contactEmail">email address</label>
                <input
                  type="email"
                  name="contactEmail"
                  id="contactEmail"
                  placeholder="e.g mzeegunga@gmail.com"
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="contactSubject">subject</label>
                <input
                  type="text"
                  name="contactSubject"
                  id="contactSubject"
                  placeholder="e.g making inquiry of my booking"
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="contactMessage">message</label>
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  rows={3}
                  placeholder="Enter your message here"
                  required
                ></textarea>
              </div>
              <div className="">
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
