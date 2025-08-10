import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsCard from './components/DestinationsCard';
import HowItWorks from "./components/HowItWorks";
import PlansCard from "./components/PlansCard";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DestinationsCard />
      <HowItWorks />
      <PlansCard />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}

export default App;
