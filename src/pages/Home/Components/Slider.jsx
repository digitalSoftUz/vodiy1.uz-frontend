import React from 'react';
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import { BaseUrl } from '../../../contans';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Slider2 = (props) => {
  var til = props.til
  var data = props.data
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
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
          975: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1441: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper__box"
      >
        {data?.map((item, index)=>{
          return(
            <SwiperSlide key={index}>
              <Link to={`/news/${item.id}`} onClick={scrollTop}>
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
              </Link>
            </SwiperSlide>
          )
        }) }
      </Swiper>
    </React.Fragment>
  )
}

export default Slider2;