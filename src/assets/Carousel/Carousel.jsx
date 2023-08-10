import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

export const Carousel = ({ list, setList }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((oldCurrent) => {
      const result = (oldCurrent + 1) % list.length;
      return result;
    });
  };

  const prevSlide = () => {
    setCurrent((oldCurrent) => {
      const result = (oldCurrent - 1 + list.length) % list.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [current]);

  return (
    <section className="slider-container">
      {list.map((item, key) => {
        const { image, name, title, quote } = item;
        return (
          <article
            className="slide"
            key={key}
            style={{
              transform: `translate(${100 * (key - current)}%)`,
              opacity: key === current ? 1 : 0,
              visibility: key === current ? "visible" : "hidden",
            }}
          >
            <img src={image} alt="" className="person-img" />
            <h4 className="name">{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <AiOutlineLeft
        onClick={() => {
          prevSlide();
        }}
        className="prev"
      />
      <AiOutlineRight
        onClick={() => {
          nextSlide();
        }}
        className="next"
      />

    </section>
  );
};
