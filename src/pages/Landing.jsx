import LandingPage from "../components/LandingPage/LandingPage"
import Border from "../components/Border/Border"
import ServiceSection from "../components/ServicesSection/ServiceSection"
import Testimonials from "../components/Testimonials/Testimonials"
import Company from "../components/Company/Company"


function Landing() {
  return (
    <div>
    <LandingPage/>
    <Border/>
    <ServiceSection/>
    <Testimonials/>
    {/* <ContactUs/> */}
    <Company/>
    </div>
  )
}

export default Landing