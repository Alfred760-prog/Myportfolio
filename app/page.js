import Image from "next/image";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Contact from "../Components/Contact.js";
import Projects from "../Components/Projects.js";
import Aboutme from "../Components/aboutme.js";
import Skills from "../Components/skills.js";

const resumePath = "c:\\Users\\alfre\\OneDrive\\Desktop\\myportfolio\\myportfolio\\public\\resume.pdf";

export default function Home() {
  return (    
    <div>
      <Header />
    
      <section id="Aboutme"><Aboutme/></section>
      <section id="Skills"><Skills/></section>
      <section id="Projects"><Projects/></section>
      <section id="Contact"><Contact/></section>
      <Footer />
                                                   
      
    </div>
  );
}
