"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Greet = () => {
  return (
    <div className="text-center space-y-4 my-8 md:text-left md:pl-4 md:space-y-20 mx-auto w-full">
      <TypeAnimation
        sequence={["Robert Safin", 1000, "", 1000]}
        repeat={Infinity}
        className="headerM text-white mb-4 hidden md:block"
      />
      <h1 className="headerL text-white text-[40px] tracking-wide md:headerL xl:headerXl xl:max-w-[800px] md:max-w-[450px]">
        Nice to meet you! I`m{" "}
        <span className="xl:pt-4 no-underline border-b-4 border-green -pb-1 inline-block">
          Robert{" "}
        </span>
        .
      </h1>
      <p className="text text-white text-[18px] xl:w-full md:pr-4 xl:max-w-[800px] md:max-w-[450px]">
        I am a full-stack developer, currently a lead teacher at{" "}
        <a
          href="https://www.lewagon.com/"
          target="_blank"
          className="text-green underline"
        >
          Le Wagon
        </a>{" "}
        in Bali for AI Software course. I have master's degrees in Economics and
        Real Estate development from London. I am open for freelance projects,
        get in touch. I have a disgner and a data scientist on retiainer.
      </p>
      {/* <Link href={"#contact"}>
        <p className="mt-20 hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit mx-auto pb-1 md:mx-0">
          CONTACT ME
        </p>
      </Link> */}
    </div>
  );
};

export default Greet;
