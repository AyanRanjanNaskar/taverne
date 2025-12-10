import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import gsap from "gsap";
import Hero from "./component/Hero";
import Cocktails from "./component/Cocktails";
import About from "./component/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    
  </main>
)

export default App