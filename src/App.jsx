import Navigation from './components/Navigation/Navigation.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import './App.css'
import Border from './components/Border/Border.jsx'
import Footer from './components/Footer/Footer.jsx'
import ServiceSection from './components/ServicesSection/ServiceSection.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
// import { Outlet } from 'react-router-dom'

function App() {

  return (
  <>
    <Navigation />
    <LandingPage/>
    <Border/>
    <ServiceSection/>
    <Testimonials/>
    {/* <Outlet/> */}
    <Footer/>
  </>
  )
}

export default App
