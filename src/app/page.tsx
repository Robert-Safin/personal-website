import BackgroundPatterns from "./components/BackgroundPatterns";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import Three from "./components/Three";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import End from "./components/End";

export default function Home() {
  return (
    <div className="mx-auto px-4 md:px-8 xl:px-20">
      <BackgroundPatterns />
      <Three />
      <div className="border-b flex flex-col md:flex-row-reverse md:pb-20">
        <Avatar />
        <Greet />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <End />
    </div>
  );
}
