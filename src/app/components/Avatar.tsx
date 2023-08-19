"use client";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import Typed from "react-typed";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center avatarBgGradient w-fit mx-auto pt-6">
      <Typed
        strings={["Robert Safin"]}
        typeSpeed={40}
        backSpeed={40}
        loop
        className="headerM text-white mb-4 md:hidden"
      />
      <div className="flex justify-evenly w-full md:mt-2">
        <Link href="/CV-Eng.pdf" target="_blank">
          <ImProfile className="w-5 h-5 text-white  hover:text-green" />
        </Link>
        <Link href="https://github.com/Robert-Safin" target="_blank">
          <BsGithub className="w-5 h-5 text-white  hover:text-green" />
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
      <Image
        src={"/me-nobg.png"}
        alt={"avatar"}
        width={10000}
        height={10000}
        className="w-[174px] h-full transform filter grayscale object-cover
        md:w-full md:h-full
        xl:w-full xl:h-full

        "
      />
    </div>
  );
};

export default Avatar;
