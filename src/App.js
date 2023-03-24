import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  About,
  Certificate,
  Contact,
  Courses,
  Footer,
  Home,
  Info,
  Mentors,
  Navbar,
  News,
  Statistic,
} from "./components/";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Info />
        <Courses />
        <Mentors />
        <Statistic />
        <News />
        <Certificate />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
