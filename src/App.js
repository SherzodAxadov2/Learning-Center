import React from "react";
import { About, Courses, Home, Info, Mentors, Navbar } from "./components/";

const App = () => {
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
      </main>
    </>
  );
};

export default App;
