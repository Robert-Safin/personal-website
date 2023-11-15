import { FC } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects: FC = () => {
  return (
    <div className="border-t mx-auto mb-16">
      <div className="flex items-center justify-between mt-16 mb-8">
        <h1 className="headerL text-[40px] tracking-wide">Projects</h1>
        <Link href={"#contact"}>
          <p className=" hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit mx-auto pb-1 md:mx-0">
            CONTACT ME
          </p>
        </Link>
      </div>
      <div className="flex flex-col space-y-40 lg:space-x-60">
        <ProjectCard url="https://symbobtic.vercel.app/" name="Design studio website" github="https://github.com/Robert-Safin/symbobtic"/>
        <ProjectCard url="https://elysium-beta.vercel.app/" name="Gym website" github="https://github.com/Robert-Safin/elysium"/>
        <ProjectCard url="https://quant-woad.vercel.app/" name="DEX website" github="https://github.com/Robert-Safin/quant"/>
        <ProjectCard url="https://r3f-demo-tau.vercel.app/" name="Expo 3D website" github="https://github.com/Robert-Safin/r3f-test"/>
        <ProjectCard url="https://trello-pwa.vercel.app/" name="PWA Trello" github="https://github.com/Robert-Safin/trello-pwa"/>
      </div>
    </div>
  );
};

export default Projects;
