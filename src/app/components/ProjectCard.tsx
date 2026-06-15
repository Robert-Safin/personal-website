"use client";
import Link from "next/link";
import { FC } from "react";
interface Props {
  url?: string;
  name: string;
  github?: string;
  subtext: string;
}

const ProjectCard: FC<Props> = (props) => {
  return (
    <div className="h-[550px] md:h-[600px] xl:h-[700px] overflow-x-hidden">
      <h1 className="headerM mb-4">{props.name}</h1>
      <p className="text pb-4">{props.subtext}</p>
      <iframe
        src={props.url}
        width="100%"
        height="100%"
        className="rounded-xl"
      ></iframe>
      {/* <div className="flex space-x-10 mt-4 lg:mt-8">
        <Link href={props.url} target="_blank" className="hover:text-green headerM text-white text-[18px] tracking-widest border-b-2 border-green w-fit pb-1 mx-0">Live link</Link>
        <Link href={props.github} target="_blank" className="hover:text-green headerM text-white text-[18px] tracking-widest border-b-2 border-green w-fit pb-1 mx-0">Github</Link>
      </div> */}
    </div>
  );
};

export default ProjectCard;
