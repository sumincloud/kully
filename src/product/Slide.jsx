import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Slide(props) {
  return (
    <>
      <article className='slide'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/images/slide01.jpg`} alt="슬라이드 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/images/slide02.jpg`} alt="슬라이드 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/images/slide03.jpg`} alt="슬라이드 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/images/slide04.jpg`} alt="슬라이드 이미지" />
          </SwiperSlide>


        </Swiper>
      </article>
    </>
  );
}

export default Slide;