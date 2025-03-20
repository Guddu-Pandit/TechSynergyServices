import React from "react";
import styles from "./LandingPage.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus.`,
    img: `/Images/model4.png`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus.`,
    img: `/Images/model3.png`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus.`,
    img: `/Images/model2.png`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus.`,
    img: `/Images/model1.png`,
  },
  {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus.`,
    img: `/Images/model5.png`,
  }
];

const LandingPage = () => {
    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
  return (
    <div>
        <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className={`${styles.landing}`}>
          <div className={styles.hero_img}>
            <img src={d.img} alt="model1" />
          </div>
          <div className={styles.hero_text}>
            <p>{d.text}</p>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default LandingPage;
