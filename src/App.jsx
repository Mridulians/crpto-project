import { Element } from "react-scroll";
import { Fade } from "react-reveal";

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

      <Element name="home">
        <Fade>
          <Hero />
        </Fade>
      </Element>
      <Element name="features">
        <Fade>
          <Features />
        </Fade>
      </Element>
      <Element name="packages">
        <Fade>
          <Packages />
        </Fade>
      </Element>
      <Element name="about">
        <Fade>
          <About />
        </Fade>
      </Element>
      <Element name="testimonials">
        <Fade>
          <Testimonials reviews={reviews} />
        </Fade>
      </Element>
      <Element name="cta">
        <Fade>
          <City />
        </Fade>
      </Element>
      <Element name="footer">
        <Fade>
          <Footer />
        </Fade>
      </Element>
    </>
  );
};

export default App;
