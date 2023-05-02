import React, { useState } from 'react';
import './gallery.scss';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Gallery = (props) => {
  const [imageArray, setImageArray] = useState([])
  const swiperElRef = useRef(null);

  useEffect(() => {
    setImageArray(props.props)
  }, [props.props])

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
        {imageArray.map((image, index) => {
          return (
            <swiper-slide key={index}>
              <img src={image.url} alt={image.id} />
            </swiper-slide>
          )
        })}
      </swiper-container>
    </div>
  );
};

export default Gallery;
