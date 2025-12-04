import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import "./App.css";
import Purpose from "./components/Purpose";
import Feature from "./components/Feature";
import Schedule from "./components/Schedule";
import Monitor from "./components/Monitor";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Dasgal from "./components/Dasgal";
const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden ">
      <div className="absolute -top-28 w-full ">
        <div className="overflow-hidden">
          <Nav />
          <Hero />
          <CompanyLogo />
          <Purpose />
          <Feature />
          <Schedule />
          <Monitor />
          <Pricing />
          <Service />
          <Testimonials/>
          <Footer/>
          <Dasgal/>
        </div>
      </div>
    </main>
  );
};

export default App;
