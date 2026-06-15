"use client";
import { FaRust } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { motion } from "motion/react";
import LanguageCard from "./LanguageCard";

const languages = [
  { name: "Go", Icon: FaGolang, color: "#00ADD8" },
  { name: "Rust", Icon: FaRust, color: "#D34516" },
  { name: "Ruby", Icon: DiRuby, color: "#9B111E" },
  { name: "Javascript", Icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "Typescript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Bash", Icon: SiGnubash, color: "#4eaa25" },
];

const Languages = () => {
  let delay = 0;

  return (
    <div className="py:8 md:py-16">
      <motion.h1
        className="headerL text-[40px] tracking-wide pb-10"
        initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Languages
      </motion.h1>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 md:gap-20">
        {languages.map((lang) => (
          <LanguageCard
            key={lang.name}
            name={lang.name}
            Icon={lang.Icon}
            color={lang.color}
            delay={(delay += 0.2)}
          />
        ))}
      </div>
    </div>
  );
};

export default Languages;
