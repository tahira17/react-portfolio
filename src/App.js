import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from './components/Skills'
import Work from './components/Work'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    AOS.init({duration:1600})
    AOS.refresh();
  })
  return (
    <div  >
<NavBar/>
<Home />

<About />
<Skills />
<Work />
<Contact />
    </div>
  );
}

export default App;
