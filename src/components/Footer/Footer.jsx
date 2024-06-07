import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
  return (
    <section id="footer" className="footer-section">
      <p className="footer-line">
        website by{" "}
        <Link to={"https://www.linkedin.com/in/manasegunga/"}>
          Manase Gunga
        </Link>{" "}
        &copy; {new Date().getFullYear()} | All rights reserved
      </p>
    </section>
  );
};

export default Footer;
