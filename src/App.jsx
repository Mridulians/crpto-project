// import { Element } from "react-scroll";
// import { Fade } from "react-reveal";

import About from "./components/About";
import City from "./components/City";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />
      <Packages />

      <About />

      <Testimonials reviews={reviews} />

      <City />

      <Footer />
    </>
  );
};

export default App;
