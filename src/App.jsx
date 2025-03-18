import Navigation from './components/Navigation/Navigation.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import './App.css'
import Border from './components/Border/Border.jsx'
import Footer from './components/Footer/Footer.jsx'
import ServiceSection from './components/ServicesSection/ServiceSection.jsx'

function App() {

  return (
  <div>
    <Navigation />
    <LandingPage/>
    <Border/>
    <ServiceSection/>
    <Footer/>
  </div>
  )
}

export default App
