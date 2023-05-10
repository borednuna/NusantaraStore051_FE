import React from 'react';
import './card_carousel.scss';
import Card from '../card/card';

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

const CardCarousel = (props) => {
  const [items, setItems] = useState({});
  const [view, setView] = useState(3);
  const [card1, setCard1] = useState({});
  const [card2, setCard2] = useState({});
  const [card3, setCard3] = useState({});
  const [card4, setCard4] = useState({});
  const [card5, setCard5] = useState({});

  useEffect(() => {
    if (props === undefined || Object.keys(props).length === 0) {
      setItems(items);
    } else {
      setItems(props.props);
      setCard1(props.props[0]);
      setCard2(props.props[1]);
      setCard3(props.props[2]);
      setCard4(props.props[3]);
      setCard5(props.props[4]);
    }
  }, [props]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setView(2);
      } else {
        setView(3);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      // eslint-disable-next-line
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <div className="cardcarousel">
      <swiper-container
        ref={swiperElRef}
        slides-per-view={view}
        navigation="false"
        pagination="false"
        loop="true"
        className="my-swiper"
        autoplay="true"
      >
        <swiper-slide>
          <Card props={card1} />
        </swiper-slide>
        <swiper-slide>
          <Card props={card2} />
        </swiper-slide>
        <swiper-slide>
          <Card props={card3} />
        </swiper-slide>
        <swiper-slide>
          <Card props={card4} />
        </swiper-slide>
        <swiper-slide>
          <Card props={card5} />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default CardCarousel;
