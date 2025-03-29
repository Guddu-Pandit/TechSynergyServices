import styles from './Company.module.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const data = [
    {
      id: 1,
      img: '/Images/IBM.webp',
    },
    {
      id: 2,
      img: '/Images/TCS.webp',
    },
    {
      id: 3,
      img: '/Images/Steria.webp',
    },
    {
      id: 4,
      img: '/Images/Cognizant.png',
    },
    {
      id: 5,
      img: '/Images/AWS.webp',
    },
    {
      id: 6,
      img: '/Images/Accenture.webp',
    },
  ]
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d8d8d8", borderRadius: "50%",  }}
        onClick={onClick}
      />
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d8d8d8", borderRadius: "50%",}}
        onClick={onClick}
      />
    );
  }

export const Company = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     pauseOnHover: false,
    //   };


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1046,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <div className={styles.Cmp}>
    <div className={styles.Heading}>
        <h2>Our Learners Work At</h2>
        <p>Our learners work at some of the leading and innovative organizations of today, solving core business problems.</p>
    </div>
  
    <div className={styles.container}>
    <Slider {...settings}>
      {data.map((d) => (
        <div key={d.index} className={styles.box}>
           <img src={d.img} alt="User"/>
          </div>
      ))}
      </Slider>
    </div>
</div>
  )
}

export default Company