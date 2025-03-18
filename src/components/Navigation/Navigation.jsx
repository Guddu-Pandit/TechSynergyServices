import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
        <nav className={`${styles.nav} container`}>
            <div>
                <img src="./Images/logo1.jpeg" alt="logo" />
            </div>
                <ul>
                    <li><a href="https://www.google.com/">Home</a></li>
                    <li><a href="https://www.google.com/">About</a></li>
                    <li><a href="https://www.google.com/">Training & Internship</a></li>
                    <li><a href="https://www.google.com/">Contact</a></li>
                </ul>     
        </nav>
    </div>
  )
}

export default Navigation