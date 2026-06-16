import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import MoreProductsAvailable from './components/MoreProductsAvailable';
import WhyChooseUs from './components/WhyChooseUs';
import Quality from './components/Quality';
import Process from './components/Process';
import GlobalReach from './components/GlobalReach';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <MoreProductsAvailable />
        <WhyChooseUs />
        <Quality />
        <Process />
        <GlobalReach />
        <Testimonials />
        <Contact />
        <Privacy />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
