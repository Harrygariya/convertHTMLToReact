import Hero from './hero'
import Slider from './slider'
import Feature from './feature_section'
import Aboutus from './aboutus_section'
import Pro from './pro_section'
import Service from './service_section'
import Client from './client_section'
import Contact from './contact_section'
import Info from './info_section'
import Footer from './footer_section'



const Home = ()=>{
    return(
        <div class="hero_area">
           <Hero />
           <Slider />
           <Feature />
           <Aboutus />
           <Pro />
           <Service />
           <Client />
           <Contact />
           <Info />
           <Footer />
        </div>
    )
}

export default Home;