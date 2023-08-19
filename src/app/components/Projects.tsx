import { FC } from "react";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  return (
    <div className="border-t mx-auto mb-16">
      <div className="flex items-center justify-between mt-16 mb-8">
        <h1 className="headerL text-[40px] tracking-wide">Projects</h1>
        <h2 className="hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green w-fit pb-1">
          CONTACT ME
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          image="/projects/madu.webp"
          title="Hi mum"
          technologies={['React', 'TypeScript', 'Next.js', 'TailwindCSS']}
          liveLink=""
          githubLink=""
        />
        <ProjectCard
          image="/projects/madu.webp"
          title="Hi mum Hi mum Hi mum Hi mum"
          technologies={['React', 'TypeScript', 'Next.js', 'TailwindCSS']}
          liveLink=""
          githubLink=""
        />
        <ProjectCard
          image="/projects/madu.webp"
          title="Hi mum Hi mumHi mum Hi mum Hi mum Hi mum Hi mum"
          technologies={['React', 'TypeScript', 'Next.js', 'TailwindCSS']}
          liveLink=""
          githubLink=""
        />
      </div>
    </div>
  );
};

export default Projects;
