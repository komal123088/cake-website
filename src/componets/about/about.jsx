import "../about/about.css";
import cakeImg from "../../assets/image/cake2.png";
import cake1 from "../../assets/image/cake1.jpg";
import cake2 from "../../assets/image/cake2.png";
import cake3 from "../../assets/image/cake3.jpg";
import cake4 from "../../assets/image/cake6.png";
import user1 from "../../assets/image/image3.png";
import user2 from "../../assets/image/image4.png";
import user3 from "../../assets/image/image5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";

const products = [
  { id: 1, img: cake1, title: "Delightful Lemon", price: "$98.00" },
  { id: 2, img: cake2, title: "Sweet Surprise", price: "$98.00" },
  { id: 3, img: cake3, title: "Cashmere Tank + Bag", price: "$98.00" },
  { id: 4, img: cake4, title: "Chocolate Love", price: "$98.00" },
];
const testimonials = [
  {
    id: 1,
    name: "Wilma Mumduya",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
    img: user1,
  },
  {
    id: 2,
    name: "David Andrew",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    img: user2,
  },
  {
    id: 3,
    name: "Sarah Connor",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: user3,
  },
];
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about section">
      <div className="about-container">
        <h1 className="about-title" data-aos="zoom-in-up">
          This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
        </h1>
        <div className="underline" data-aos="fade-up"></div>

        <div className="about-content">
          <div className="about-text" data-aos="zoom-in-up">
            <h2 className="about-subtitle">
              This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute dolor in repreh derit
              in voluptate velit esse cillum.
            </p>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute dolor in repreh derit in voluptate velit esse
              cillum.
            </p>
          </div>

          <div className="about-img" data-aos="zoom-in-up">
            <img src={cakeImg} alt="Cake" />
          </div>
        </div>
      </div>
      <section className="slider-section">
        <Slider {...settings}>
          {products.map((item, index) => (
            <div
              className="slide-card"
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </Slider>
      </section>
      <section className="testimonial-section">
        <h2
          className="testimonial-title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Food Lover's Say
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-duration="1200"
              data-aos-delay={index * 200}
            >
              <div className="stars" data-aos="zoom-in" data-aos-delay="300">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p
                className="testimonial-text"
                data-aos="fade-in"
                data-aos-delay="400"
              >
                "{item.text}"
              </p>

              <div
                className="testimonial-user"
                data-aos="flip-up"
                data-aos-delay="500"
              >
                <img src={item.img} alt={item.name} className="user-img" />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
