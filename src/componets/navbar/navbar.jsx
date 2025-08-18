import "../navbar/navbar.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  const toggleMenu = () => {
    console.log(
      "Toggling menu. Current state:",
      isMenuOpen,
      "New state:",
      !isMenuOpen
    );
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar section">
      <div className="top-bar" data-aos="fade-down">
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>

        <h1 className="logo">Cake Shop</h1>

        <div className="call-btn">
          <a href="tel:+107833464378">Call Us: +10 783 346 4378</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          HOME
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          CAKES
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          ABOUT
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          BLOG
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
