"use client";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Typed from "react-typed";

const End = () => {
  return (
    <div className="flex flex-row w-full bg-darkGray pb-14 items-center justify-between px-4 xl:px-32">
      <div>
        <Typed
          strings={["Robert Safin"]}
          typeSpeed={40}
          backSpeed={40}
          loop
          className="hidden  md:block headerM text-white mb-4"
        />
      </div>

      <div className="flex space-x-6 ">
        <Link href="/CV-Eng.pdf" target="_blank">
          <ImProfile className="w-5 h-5 text-white  hover:text-green" />
        </Link>
        <Link href="https://github.com/Robert-Safin" target="_blank">
          <BsGithub className="w-5 h-5 text-white hover:text-green" />
        </Link>
        <Link href="https://www.linkedin.com/in/robert-safin/" target="_blank">
          <BsLinkedin className="w-5 h-5 text-white  hover:text-green" />
        </Link>
        <Link
          href="https://wa.me/79670429889"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="w-5 h-5 text-white  hover:text-green" />
        </Link>
        <Link href="mailto:robertsafin98@gmail.com">
          <FiMail className="w-5 h-5 text-white  hover:text-green" />
        </Link>
      </div>
    </div>
  );
};

export default End;
