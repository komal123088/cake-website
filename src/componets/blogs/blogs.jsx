import "../blogs/blogs.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import blog1 from "../../assets/image/blog1.jpg";
import blog2 from "../../assets/image/blog2.jpg";
import insta1 from "../../assets/image/cake6.png";
import insta2 from "../../assets/image/cake3.jpg";
import insta3 from "../../assets/image/cake2.png";
import insta4 from "../../assets/image/cake1.jpg";
import { FaInstagram } from "react-icons/fa";

function BlogSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <div className="blog-section">
        {/* Top Heading */}
        <div className="section-header" data-aos="fade-down">
          <h2>Our Blogs</h2>
          <button className="more-btn">MORE BLOG</button>
        </div>

        {/* Blog Cards */}
        <div className="blogs">
          {/* Blog 1 */}
          <div className="blog-card" data-aos="fade-up">
            <img src={blog1} alt="blog-img" />
            <div className="blog-content">
              <h3>Tomato, black olive, feta & anchovy tart ulla moa laboris</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <a href="#" className="learn-more">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="blog-card" data-aos="fade-up">
            <img src={blog2} alt="blog-img" />
            <div className="blog-content">
              <h3>Tomato, black olive, feta & anchovy tart ulla moa laboris</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <a href="#" className="learn-more">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="instagram" data-aos="fade-up">
          <h2>Follow us on Instagram</h2>
          <button className="insta-btn">
            <FaInstagram className="insta-icon" />
            <span>Cakeshop</span>
          </button>

          <div className="insta-gallery">
            <img src={insta1} alt="cake1" data-aos="zoom-in" />
            <img
              src={insta2}
              alt="cake2"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <img
              src={insta3}
              alt="cake3"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <img
              src={insta4}
              alt="cake4"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
