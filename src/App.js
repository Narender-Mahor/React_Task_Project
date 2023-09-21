import './App.css';
import Header from './components/Header';
import Venue from './components/Venue';
import OurProgram from './components/OurProgram';
import OfferEvents from './components/OfferEvents';
import WhyChooseUs from './components/WhyChooseUs';
import OnlineSection from './components/OnlineSection';
import Testimonials from './components/Testimonials';
import CounterBg from './components/CounterBg';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <OurProgram/>
    <Venue/>
    <OfferEvents/>
    <WhyChooseUs/>
    <OnlineSection/>
    <Testimonials/>
    <CounterBg/>
    <Footer/>
    </>
  );
}

export default App;
