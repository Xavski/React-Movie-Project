import React from "react";
import SearchBar from "./ui/SearchBar";
import "./Landing.css";
import HorrorMovie from "../assets/HorrorMovie.svg";
import HomeCinema from "../assets/HomeCinema.svg";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Landing = () => {
  return (
    <div id = 'landing' >
      <div className="landing__container">
        <div className="landing__row">
          <div className="landing__description">
            <div className="landing__text">
              Unlimited <span className="color">Movies.</span>
              <br></br>
              Unlimited <span className="color">Watch Time.</span>
              <br></br>
              Unlimited <span className="color">Freedom.</span>
            </div>
            <div className="search__container">
              <SearchBar />
            </div>
          </div>
              <div className="landing__img--container">
                <Swiper
                  // install Swiper modules
                  modules={[Autoplay]}
                  slidesPerView={1}
                  autoplay={{ delay: 2500 }}
                  className="landingSwiper"
                >
                  <SwiperSlide>
                    {" "}
                    <img src={HorrorMovie} alt="" className="landing__img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={HomeCinema} alt="" className="landing__img" />
                  </SwiperSlide>
                </Swiper>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

