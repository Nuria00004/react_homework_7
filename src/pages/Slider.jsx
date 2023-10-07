import React from 'react' //raf
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from '../images/image_1.jpg'
import image2 from '../images/image_2.jpg'
import image3 from '../images/image_3.jpg'
import image4 from '../images/image_4.jpg'




const Slider = () => {

    const imgStyle = {
        width: '750px',
        height: '600px'
    }

  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img style={imgStyle} src= {image1} alt=''/></SwiperSlide>
      <SwiperSlide><img  style={imgStyle} src= {image2} alt=''/></SwiperSlide>
      <SwiperSlide><img  style={imgStyle} src= {image3}alt=''/></SwiperSlide>
      <SwiperSlide><img  style={imgStyle} src= {image4} alt=''/></SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Slider
