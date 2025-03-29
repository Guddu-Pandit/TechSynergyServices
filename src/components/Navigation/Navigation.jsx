// import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import { useState } from 'react'
import { MdMenu } from "react-icons/md";



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className={`${styles.nav} container`}>
            <div>
                <img src="./Images/logo1.jpeg" alt="logo" />
            </div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'> About</a></li>
                    <li><a href='/training'>Training & Internship</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>  
                <button className="menubtn" onClick={() => setIsOpen(!isOpen)}><MdMenu/></button>   
        </nav>
    </div>
  )
}

export default Navigation