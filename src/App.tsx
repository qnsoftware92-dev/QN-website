import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Products from "./component/Products";
import { useState, useRef } from "react";
import AboutUs from "./component/About-us";
import ProviderEngineer from "./component/Provider-engineer";
import Footer from "./component/Footer";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Member from "./component/Member";
import WhatDidWeDo from "./component/Section_WhatDidWeDo";
function App() {
  const [activeNav, setActiveNav] = useState("");
  const bannerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (section: string) => {
    if (section === "Home" && bannerRef.current) {
      window.scrollTo({
        top: bannerRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (section === "Products" && productsRef.current) {
      window.scrollTo({
        top: productsRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (section === "About Us" && aboutUsRef.current) {
      window.scrollTo({
        top: aboutUsRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (section === "Services" && serviceRef.current) {
      window.scrollTo({
        top: serviceRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    } else if (section === "Contact Us" && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          scrollToSection(nav);
        }}
      />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={aboutUsRef}>
        <Member />
        <Products />
        <AboutUs />
      </div>
      <div ref={serviceRef}>
        <Service />
        <ProviderEngineer />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer setActiveNav={(nav) => {
        setActiveNav(nav);
        scrollToSection(nav);
      }} />
    </>
  );
}

export default App;
