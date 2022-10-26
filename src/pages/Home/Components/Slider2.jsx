import React from 'react';
import { Pagination } from "swiper";
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Slider = (props) => {
  var til = props.til
  var data = props.data
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper__box"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={`/news/${item.id}`} onClick={scrollTop}>
                <div className="slider__img">
                  <img src={BaseUrl + item.img} alt="" />
                </div>
                <p>
                  {
                    til === "uz" ? item.title_uz
                      : til === "ru" ? item.title_ru
                        : item.title_ru
                  }
                </p>
              </a>
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>1111</SwiperSlide>
        <SwiperSlide>1111</SwiperSlide>
        <SwiperSlide>1111</SwiperSlide>
        <SwiperSlide>1111</SwiperSlide>
        <SwiperSlide>1111</SwiperSlide> */}
      </Swiper>
    </React.Fragment>
  )
}

export default Slider;