import Header from "../../components/Header/Header";
import "./Contact.css";

import Form from "./Form";
import Socials from "./Socials";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-section">
        <h1 className="section-title">contact us</h1>
        <p className="section-subtitle">
          fell free to get in touch with us or follow our socials
        </p>
        <div className="contact-section-content">
          <div className="contact-details">
            <Socials />
            <Form />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
