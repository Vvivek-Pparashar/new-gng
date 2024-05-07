import React from "react";
import sn1 from "../../assets/croma.jpg";
import sn2 from "../../assets/masti.jpg";
import sn3 from "../../assets/diy.jpg";
import sn4 from "../../assets/multiplex.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import "./RecentlyJoined.css";

const RecentlyJoined = () => {
  return (
    <div className="rj">
      <h1>Opening Shortly</h1>
      <div className="rj-c">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="rj-c1">
              <img src={sn1} />
              <h2>Tata Croma</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rj-c1">
              <img src={sn2} />
              <h2>Masti Zone</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rj-c1">
              <img src={sn3} />
              <h2>Mr. D.I.Y</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rj-c1">
              <img src={sn4} />
              <h2>Multiplex</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rj-c1">
              <img src={sn1} />
              <h2>Bikanervale</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentlyJoined;
