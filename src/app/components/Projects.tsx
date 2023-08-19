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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          image="/projects/madu.webp"
          title="Aletheia"
          description="description"
          technologies={["React", "TypeScript", "Next.js", "TailwindCSS", "Prisma", 'MySQL']}
          liveLink="https://aletheia2.vercel.app/"
          githubLink="https://github.com/Robert-Safin/aletheia2"
        />
        <ProjectCard
          image="/projects/madu.webp"
          title="Favolist"
          description="description"
          technologies={["React", "TypeScript", "Next.js", "TailwindCSS", "MongoDB", 'Mongoose']}
          liveLink="https://favolist-bice.vercel.app/"
          githubLink="https://github.com/Robert-Safin/favolist"
        />
        <ProjectCard
          image="/projects/madu.webp"
          title="Personal Website"
          description="description"
          technologies={["React", "TypeScript", "Next.js", "TailwindCSS"]}
          liveLink="/"
          githubLink="https://github.com/Robert-Safin/personal-website"
        />
      </div>
    </div>
  );
};

export default Projects;
