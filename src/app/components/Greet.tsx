"use client";
import Link from "next/link";
import Typed from "react-typed";

const Greet = () => {
  return (
    <div className="text-center space-y-4 my-8 md:text-left md:pl-4 md:space-y-20 mx-auto w-full">
      <Typed
        strings={["Robert Safin"]}
        typeSpeed={40}
        backSpeed={40}
        loop
        className="headerM text-white mb-4 hidden md:block"
      />
      <h1 className="headerL text-white text-[40px] tracking-wide md:headerL xl:headerXl">
        Nice to meet you! I`m{" "}
        <span className="xl:pt-4 no-underline border-b-4 border-green -pb-1 inline-block">
          Robert Safin{" "}
        </span>
        .
      </h1>
      <p className="text text-white text-[16px] xl:w-full md:pr-4">
        I am a full-stack react developer. I have 2 degrees from London
        universities and experience working in real estate development and as an
        oil and gas economist. I have attended a 3 month intensive coding
        bootcamp `Le Wagon`. I strife to write typesafe, maintainable, scalable
        code as well as provide a great user experience all on the Edge network
        to provide fastest response times. I am now looking for remote work
        opportunities.
      </p>
      <Link href={"#contact"}>
        <p className="mt-20 hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit mx-auto pb-1 md:mx-0">
          CONTACT ME
        </p>
      </Link>
    </div>
  );
};

export default Greet;
