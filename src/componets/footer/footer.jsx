import "../footer/footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-top" data-aos="fade-up">
        <h2 className="logo">Cake Shop</h2>
        <ul className="nav-links">
          <li data-aos="zoom-in" data-aos-delay="100">
            <a href="#">HOME</a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="200">
            <a href="#">CAKES</a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="300">
            <a href="#">ABOUT</a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            <a href="#">BLOG</a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="500">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>

      <hr />

      <div className="footer-content">
        <div className="footer-about" data-aos="fade-up">
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <div className="social-links" data-aos="zoom-in">
            <a href="#">
              <FaInstagram /> Instagram
            </a>
            <a href="#">
              <FaFacebookF /> Facebook
            </a>
            <a href="#">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        <div className="footer-info">
          <div className="info-box" data-aos="fade-up" data-aos-delay="200">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>
                4736 Poe Lane, HOT SPRINGS, <br /> Montana-59845
              </p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="400">
            <FaPhone className="info-icon" />
            <div>
              <h4>Contact</h4>
              <p>913-473-7000</p>
              <p>contact@cakeshop.com</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This Website is made with
          <span className="colorlib"> Creative Babar Team</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
