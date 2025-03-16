import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Products from '../components/home/Products';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;
