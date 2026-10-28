import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ title }) => {
  return (
    <section id="sliderType">
      <h2 className="blind">{title}</h2>

      <Swiper
        className="hero"
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="" />

            <div className="desc">
              <div className="container">
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>

                <div className="btn">
                  <a href="#">자세히 보기</a>
                  <a href="#">사이트 보기</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
