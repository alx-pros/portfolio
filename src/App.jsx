import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";
import Item1 from "./components/portfolio/item1/Item1.jsx";
import Item2 from "./components/portfolio/item2/Item2.jsx";
import Item3 from "./components/portfolio/item3/Item3.jsx";
import Item4 from "./components/portfolio/item4/Item4.jsx";
import Item5 from "./components/portfolio/item5/Item5.jsx";

const App = () => {
  return (<div>
    <section id="Profilo">
      <Navbar/>
       <Hero />
    </section> 
    <section id="Competenze">
      <Skills />
    </section> 
    <section id="Portfolio">
      <Item1/>
    </section>
    <section>
      <Item2/>
    </section>
    <section>
      <Item3/>
    </section>
    <section>
      <Item4/>
    </section>
    <section>
    <Item5/>
    </section>
    <section id="Contatto">
      <Contact/>
    </section>
  </div> 
  );
};

export default App;
