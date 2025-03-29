import styles from './Testimonials.module.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const data = [
  {
    id: 1,
    name: 'Riya',
    img: '/Images/riya.jpeg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    id: 2,
    name: 'Deepti',
    img: '/Images/deepti.jpeg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    id: 3,
    name: 'Guddu Kumar',
    img: '/Images/Guddu.png',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    id: 4,
    name: 'John Doe',
    img: '/Images/user2.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    id: 5,
    name: 'John Doe',
    img: '/Images/user1.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    id: 6,
    name: 'John Doe',
    img: '/Images/user2.jpg',
    review: "The program's curriculum is perfectly aligned with industry needs. I was able to immediately apply what I learned to solve real problems during my internship."
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


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <div className={styles.testimonials}>
        <div className={styles.Heading}>
            <h2>What our Students Say</h2>
            <p>Hear from our graduates who have successfully transitioned into the tech industry 
              after completing our training and internship programs.</p>
        </div>

        <div className={styles.container}>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.index} className={styles.box}>
              <div className={styles.upperbox}>
                <p>{d.review}</p>
              </div>
              <div className={styles.lowerbox}>
               <img src={d.img} alt="User"/>
               <h4>{d.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    </div>
  )
}

export default Testimonials