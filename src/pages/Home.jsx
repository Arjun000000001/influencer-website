import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedVideo from "../components/FeaturedVideo";
import S8ULSpotlight from "../components/S8ULSpotlight";
import FoundersSection from "../components/FoundersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedVideo />
      <S8ULSpotlight />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
