import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor"

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    AOS.init({duration:1600})
    AOS.refresh();
  })
  return (
    <div className="bg-[#D8D8D8]" >
 <NavBar/>
<Home />

<About />
<Skills />
<Work />
<Contact />

    <AnimatedCursor
  color="180, 195, 227"
  innerSize={10}
  outerSize={15}
  innerScale={10}
  outerScale={0.7}
  outerAlpha={0.5}
/>
   
    </div>
  );
}

export default App;
