"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import ImageCarousel from "./ImageCarousel";
interface Props {
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: FC<Props> = (props) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="flex flex-col"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      {!isHovered && (
        <ImageCarousel photos={props.images} imageClasses="w-full object-cover h-[500px]" />
      )}

      {isHovered && (
        <div className="relative">
          <ImageCarousel
            photos={props.images}
            imageClasses="w-full opacity-50 object-cover h-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-20">
            <Link
              target="_blank"
              href={props.liveLink}
              className="hover:text-green headerM text-[16px] tracking-widest border-b-2 border-green pb-1"
            >
              VIEW PROJECT
            </Link>
            <Link
              target="_blank"
              href={props.githubLink}
              className="hover:text-green headerM text-[16px] tracking-widest border-b-2 border-green pb-1"
            >
              VIEW CODE
            </Link>
          </div>
        </div>
      )}

      <h1 className="headerM uppercase my-4 line-clamp-1">{props.title}</h1>
      <div className="flex flex-row space-x-2 line-clamp-1">
        {props.technologies.map((technology) => {
          return (
            <p key={technology} className="text-lightGray uppercase">
              {technology}
            </p>
          );
        })}
      </div>
      <p className="text text-white text-sm mt-4">{props.description}</p>
      <div className="flex space-x-8 mt-6 xl:hidden">
        <Link
          target="_blank"
          href={props.liveLink}
          className="hover:text-green headerM text-[16px] tracking-widest border-b-2 border-green pb-1"
        >
          VIEW PROJECT
        </Link>
        <Link
          target="_blank"
          href={props.githubLink}
          className="hover:text-green headerM text-[16px] tracking-widest border-b-2 border-green pb-1"
        >
          VIEW CODE
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
