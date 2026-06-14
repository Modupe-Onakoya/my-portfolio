'use client'
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />


    </div>
  );
}