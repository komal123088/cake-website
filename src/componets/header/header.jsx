import "../header/header.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <section className="hero section">
        <div className="hero-content" data-aos="fade-up">
          <h1>
            Healthy Made <br /> Delicious Cake
          </h1>
          <button data-aos="fade-down">ORDER NOW</button>
        </div>
      </section>
    </>
  );
};

export default Header;
