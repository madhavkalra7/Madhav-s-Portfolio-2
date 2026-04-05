import "./App.css";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import Hero from "./Components/hero/Hero";


const App = () => {
  return (
    <div>

      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
