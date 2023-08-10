import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { list } from "../../data";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <section className="slick-container">
      <div>
        <Slider {...settings}>
          {list.map((item, key) => {
            const { image, name, title, quote } = item;
            return (
              <article key={key}>
                <img src={image} alt="" className="person-img" />
                <h4 className="name">{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SlickCarousel;
