"use client";
import Typed from "react-typed";

const Greet = () => {
  return (
    <div className="text-center space-y-4 my-8 md:text-left md:pl-4 md:space-y-20">
      <Typed
        strings={["Robert Safin"]}
        typeSpeed={40}
        backSpeed={40}
        loop
        className="headerM text-white mb-4 hidden md:block"
      />
      <h1 className="headerL text-white text-[40px] tracking-wide md:headerL xl:headerXl">
        Nice to meet you! I`m{" "}
        <span className="no-underline border-b-4 border-green -pb-1 inline-block">
          Robert Safin
        </span>
        .
      </h1>
      <p className="text text-white text-[16px] xl:w-1/2">
        Based in the UK, I`m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <h2 className=" hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit mx-auto pb-1 md:mx-0">
        CONTACT ME
      </h2>
    </div>
  );
};

export default Greet;
