// import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
        <nav className={`${styles.nav} container`}>
            <div>
                <img src="./Images/logo1.jpeg" alt="logo" />
            </div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Training & Internship</a></li>
                    <li><a >Contact</a></li>
                </ul>     
        </nav>
    </div>
  )
}

export default Navigation