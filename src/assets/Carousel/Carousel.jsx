import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

export const Carousel = ({ list, setList }) => {
  const nextSlide = (item, setItem) => {};

  const prevSlide = (item, setItem) => {};

  return (
    <section className="slider-container">
      {list.map((item, key) => {
        const { image, name, title, quote } = item;
        return (
          <article className="slide curr-slide" key={key}>
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
