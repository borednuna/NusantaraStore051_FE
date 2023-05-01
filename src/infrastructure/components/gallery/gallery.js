import React from 'react';
import './gallery.scss';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import image1 from '../../../presentation/resources/jaizer-capangpangan-2Xhv5zrTLN0-unsplash.jpg';
import image2 from '../../../presentation/resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg';
import image3 from '../../../presentation/resources/omar-prestwich-mBjrF0MK6mc-unsplash.jpg';
import image4 from '../../../presentation/resources/road-trip-with-raj-rYOSMioTHXg-unsplash.jpg';

register();

const Gallery = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      // eslint-disable-next-line
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <div className="gallery">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        loop="true"
        className="my-swiper"
        autoplay="true"
      >
        <swiper-slide>
          <img src={image1} alt="image1" />
        </swiper-slide>
        <swiper-slide>
          <img src={image2} alt="image2" />
        </swiper-slide>
        <swiper-slide>
          <img src={image3} alt="image3" />
        </swiper-slide>
        <swiper-slide>
          <img src={image4} alt="image4" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Gallery;
