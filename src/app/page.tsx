import BackgroundPatterns from "./components/BackgroundPatterns";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import Three from "./components/Three";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import End from "./components/End";
import Languages from "./components/Languages";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Home() {
  return (
    <div id="top" className="mx-auto px-4 md:px-8 xl:px-20 pb-20">
      {/* <BackgroundPatterns /> */}
      <Three />
      <div className="border-b flex flex-col md:flex-row-reverse md:pb-20">
        <Avatar />
        <Greet />
      </div>
      <Skills />
      <Languages />
      <Projects />
      {/* <Contact /> */}
      {/* <End /> */}
      <div className="">
        <Link href="#top" className="text-red fixed bottom-2 right-2 md:bottom-6 md:right-6">
        <FaArrowAltCircleUp className="w-14 h-14 md:w-18 md:h-18"/>
        </Link>
      </div>
    </div>
  );
}
