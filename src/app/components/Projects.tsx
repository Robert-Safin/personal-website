"use client";
import { FC } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "motion/react";

const Projects: FC = () => {
  return (
    <div className="border-t mx-auto mb-16">
      <div className="flex items-center justify-between mt-16 mb-8">
        <motion.h1
          className="headerL text-[40px] tracking-wide pb-10"
          initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.h1>

        {/* <Link href={"#contact"}>
          <p className=" hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit mx-auto pb-1 md:mx-0">
            CONTACT ME
          </p>
        </Link> */}
      </div>
      <div className="flex flex-col space-y-20 lg:space-y-40">
        <ProjectCard
          url="https://gaes.ae/"
          name="Airplane Maintenance & Repairs Company (Dubai)"
          github="https://github.com/gaesweb/gaes.ae"
          subtext="Modern-corporate frontend with backend functions for talent recruitment and vacancy management"
        />
        <ProjectCard
          url="https://www.quanticotc.com/"
          name="Commodity Trading Company (Dubai)"
          github="https://github.com/Robert-Safin/quantico"
          subtext="Catchy gateway for commodity trading company"
        />
        <ProjectCard
          url="https://atomic-systems-frontend.vercel.app/"
          name="Crypto Algo Trading Platform Landing (UK)"
          github="https://github.com/godin69/atomic-sys"
          subtext="Design & components"
        />
        <ProjectCard
          url="https://symbobtic.vercel.app/"
          name="Design studio website"
          github="https://github.com/Robert-Safin/symbobtic"
          subtext="Design template"
        />
        <ProjectCard
          url="https://elysium-beta.vercel.app/"
          name="Gym website"
          github="https://github.com/Robert-Safin/elysium"
          subtext="Design template"
        />
        <ProjectCard
          url="https://quant-woad.vercel.app/"
          name="DEX website"
          github="https://github.com/Robert-Safin/quant"
          subtext="Design template"
        />
        {/* <ProjectCard url="https://r3f-demo-tau.vercel.app/" name="Expo 3D website" github="https://github.com/Robert-Safin/r3f-test"/> */}
        {/* <ProjectCard url="https://trello-pwa.vercel.app/" name="PWA Trello" github="https://github.com/Robert-Safin/trello-pwa"/> */}
      </div>
    </div>
  );
};

export default Projects;
