import Background from "./components/Background";
import Effects from "./components/Effects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (<>
    <Background />
    <Effects />
    <Navbar />
    <main>
      <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
    </main>
    <footer>© 2026 Akhil Vijay Malap · Built with React</footer>
  </>);
}
