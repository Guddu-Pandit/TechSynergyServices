import styles from "./ServiceSection.module.css";
import React from "react";
import { IoMdCode } from "react-icons/io";
import { LuLaptop, LuServer } from "react-icons/lu"; // Corrected imports
import { BsGraphUp } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const ServiceSection = () => {
  const service = [
    {
      title: "Web Development",
      description:
        "Master modern web technologies including React, Angular, and Vue.js to build responsive and dynamic websites.",
      icon: <IoMdCode />,
    },
    {
      title: "Software Engineering",
      description:
        "Learn industry-standard methodologies, tools, and frameworks to design, develop, and deploy scalable software solutions.",
      icon: <LuLaptop />, // Corrected icon
    },
    {
      title: "Data Science",
      description:
        "Develop skills in data analytics, machine learning, and visualization to extract meaningful insights from complex datasets.",
      icon: <BsGraphUp />,
    },
    {
      title: "Cloud Computing",
      description:
        "Get hands-on experience with AWS, Azure, and Google Cloud platforms to architect and deploy cloud-native applications.",
      icon: <LuServer />, // Corrected icon
    },
    {
      title: "Cybersecurity",
      description:
        "Learn to identify vulnerabilities, implement security measures, and protect systems from various cyber threats.",
      icon: <MdSecurity />,
    },
    {
      title: "IT Certification",
      description:
        "Prepare for and earn industry-recognized certifications that validate your technical skills and knowledge.",
      icon: <GrCertificate />,
    },
    {
      title: "Internship Placement",
      description:
        "Work with real clients on actual projects while being mentored by industry experts during a structured internship.",
      icon: <FiBriefcase />,
    },
    {
      title: "Career Mentoring",
      description:
        "Receive guidance on resume building, interview preparation, and career development from experienced professionals.",
      icon: <FaGraduationCap />,
    },
  ];
  return (
    <div className={styles.services}>
      <div className={styles.service}>
        <h2>Comprehensive IT Training & Services</h2>
        <p>
          Our programs combine theoretical knowledge with practical 
          implementation, preparing you for real-world challenges in the tech
          industry.
        </p>
        </div>
        <div className={styles.row}>
          {service.map((service, index) => (
            <div key={index} className={styles.box}>
              <i className={styles.icon}>{service.icon}</i>
              <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default ServiceSection;
