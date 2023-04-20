import React from "react";
import './card_carousel.scss';
import Card from '../card/card';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

const CardCarousel = () => {
    const [view, setView] = useState(3);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setView(2);
            } else {
                setView(3);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
        // eslint-disable-next-line
          const [swiper, progress] = e.detail;
          console.log(progress);
        });
    
        swiperElRef.current.addEventListener('slidechange', (e) => {
          console.log('slide changed');
        });
      }, []);

    return(
        <div className="cardcarousel">
            <swiper-container
                ref={swiperElRef}
                slides-per-view={view}
                navigation="true"
                pagination="false"
                loop="true"
                className="my-swiper"
                autoplay="true"
            >
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                </swiper-slide>
            </swiper-container>
        </div>
    )
}

export default CardCarousel;
