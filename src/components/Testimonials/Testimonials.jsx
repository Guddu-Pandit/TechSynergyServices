import styles from './Testimonials.module.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const data = [
  {
    name: 'John Doe',
    img: '/Images/user1.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    name: 'John Doe',
    img: '/Images/user2.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    name: 'John Doe',
    img: '/Images/user1.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
  {
    name: 'John Doe',
    img: '/Images/user2.jpg',
    review: 'I had a great experience with Tech Academy. The instructors were very knowledgeable and supportive. I learned a lot and was able to land a job as a software engineer after completing the program.'
  },
]


const Testimonials = () => {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.testimonials}>
        <div className={styles.Heading}>
            <h2>What our Students Say</h2>
            <p>Hear from our graduates who have successfully transitioned into the tech industry 
              after completing our training and internship programs.</p>
        </div>
        <Slider {...settings}>
          <div className={styles.content}>
            
            {data.map((d, index) => (
              <div key={index} className={styles.box}>
                <p>{d.review}</p>
                <div >
                  <img src={d.img} />
                <h4>{d.name}</h4>
                </div>
              </div>
            ))}
            </div>
        </Slider>
    </div>
  )
}

export default Testimonials