import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";

import "./Crausal.css";
const Crausal = () => {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectFade, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="hero-page-img-2"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-page-img-3"></div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="hero-page-img-4"></div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="hero-page-img-5"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-page-img-1"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Crausal;
