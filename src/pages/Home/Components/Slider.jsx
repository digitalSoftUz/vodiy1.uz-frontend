import React from 'react';
import { Pagination } from "swiper";
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Slider2 = (props) => {
  var til = props.til
  var data = props.data
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
          975: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1441: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper__box"
      >
        {data?.map((item, index)=>{
          return(
            <SwiperSlide key={index}>
              <div>
                <div className="slider__img">
                  <img src={BaseUrl+item.img} alt="" />
                </div>
                <p>
                  { 
                    til === "uz" ? item.title_uz
                    : til === "ru" ? item.title_ru
                    : item.title_en
                  } 
                </p>
              </div>
            </SwiperSlide>
          )
        }) }
      </Swiper>
    </React.Fragment>
  )
}

export default Slider2;