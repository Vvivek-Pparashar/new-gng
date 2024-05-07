import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import "./FloorPlan.css";

// import required modules
import { Zoom, Pagination, Navigation } from "swiper/modules";

export default function FloorPlan() {
  return (
    <div className="FloorPlan" id="FloorPlan">
      <h2>FLOOR PLAN</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        zoom={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Zoom, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={f1} alt="Commercial project in zirakpur" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={f2}
              alt="Real estate investment
"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={f3}
              alt="Commercial property for rent
"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
