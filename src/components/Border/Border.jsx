import styles from './Border.module.css'
import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { TbUserStar } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { SiMinds } from "react-icons/si";


const Border = () => {
  return (
    <div className={styles.border}>
        <div><span><FaUserGraduate/></span><p>Get Ready for The Next Career</p></div>
        <div><span><TbUserStar/></span><p>Master at Different Areas</p></div>
        <div><span><SiMinds/></span><p>Learn The Essential Skills</p></div>
        <div><span><PiCertificate/></span><p>Earn Certificates And Degrees</p></div>
    </div>
  )
}

export default Border