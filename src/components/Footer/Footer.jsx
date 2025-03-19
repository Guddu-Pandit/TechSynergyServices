import styles from "./Footer.module.css";
import React from "react";
import { FaLinkedin , FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.box_container}>
          <div className={styles.box}>
            <h3>about us</h3>
            <p>
              We Develop Personalized Software At Our Company, We Turn The
              Digital Dreams Of Our Clients Into A Reality. We Work Closely With
              Our Users Throughout Development To Ensure That We Are Still
              Aligned With The End-Goal. We Are Committed To Producing
              Exceptional Software For Each Of Our Clients.
            </p>
          </div>
          <div className={styles.box}>
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">services</a>
            <a href="#">Traning & Internship</a>
            <a href="#">contact</a>
          </div>
          <div className={styles.box}>
            <h3>follow us</h3>
            <a href="#">
              <i>
                <FaFacebook />
              </i>
              Facebook
            </a>
            <a href="#">
              <i>
                <FaInstagram />
              </i>
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/techsynergy-services-pvt-ltd">
              <i>
                <FaLinkedin />
              </i>
              LinkedIn
            </a>
            <a href="#">
              <i>
                <FaXTwitter />
              </i>
              Twitter
            </a>
          </div>
          <div className={styles.box}>
            <h3>Contact info</h3>
            <div className={styles.info}>
              <i>
                <FaPhone />
              </i>
              <p>+91 1234567890</p>
            </div>
            <div className={styles.info}>
              <i>
                <MdEmail />
              </i>
              <p>
                <a href="mailto:TechSynergy.Services@gmail.com">
                  TechSynergy.Services@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.info}>
              <i>
                <FaLocationDot />
              </i>
              <p>Guar City Mall, Greater Noida West,<br />India - 201318</p>
            </div>
          </div>
          <h2 className={styles.credit}>&copy; Copyright TECH-SYNERGY.
          All Rights Reserved Designed by
          Team TECH-SYNERGY</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
