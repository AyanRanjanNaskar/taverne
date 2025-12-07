import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import gsap from "gsap";
import Hero from "./component/Hero";
import Cocktails from "./component/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
    
  </main>
)

export default App