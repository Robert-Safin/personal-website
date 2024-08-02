import { FaRust } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

const Languages = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 mb-8 md:mb-20 gap-6 md:gap-20">
      <div className="w-full ">
        <DiRuby className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">Ruby</p>
      </div>

      <div className="w-full ">
        <IoLogoJavascript className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">Javascript</p>
      </div>

      <div className="w-full ">
        <SiTypescript className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">Typescript</p>
      </div>

      <div className="w-full ">
        <FaRust className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">Rust</p>
      </div>

      <div className="w-full ">
        <FaPython className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">Python</p>
      </div>

      <div className="w-full ">
        <SiCsswizardry className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">CSS</p>
      </div>

      <div className="w-full ">
        <FaHtml5 className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto" />
        <p className="text text-center mt-1 md:mt-3">HTML</p>
      </div>
    </div>
  );
};

export default Languages;
