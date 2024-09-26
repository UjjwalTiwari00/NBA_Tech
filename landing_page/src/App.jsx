import About_section from './components/About_section';
import ContactForm from './components/ContactForm';
import { Cover } from './components/cover';
import Footer from './components/Footer';
import Hero_section from './components/Hero_section';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Our_Service from './components/Our_Services';
import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo';



export default function App() {
  return (
    <div className='overflow-x-hidden'>
    <Navbar  />
    <Hero_section  />
    <About_section/>
    <StickyScrollRevealDemo className="w-screen"/> 
    {/* <CardHoverEffectDemo /> */}
    <Our_Service/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}