import Navigation from './components/Navigation/Navigation.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import './App.css'
import Border from './components/Border/Border.jsx'
import Footer from './components/Footer/Footer.jsx'
import ServiceSection from './components/ServicesSection/ServiceSection.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import { Company } from './components/Company/Company.jsx'


function App() {

  return (
  <>
    <Navigation />
    <LandingPage/>
    <Border/>
    <ServiceSection/>
    <Testimonials/>
    <ContactUs/>
    <Company/>
    <Footer/>
  </>
  )
}

export default App
