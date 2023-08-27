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
          images={[
            "/projects/ale/ale1.png",
            "/projects/ale/ale2.png",
            "/projects/ale/ale3.png",
          ]}
          title="Geolocation SME advertising platform"
          description="'Aletheia' is full stack web app that allows business
          owners who are registered on google maps to create various events and
          promotions, which are then served to users based on their geographic
          coordinates. Business owners can set up 'recurring' or 'one time' activities
          such as 'happy hours every Friday' or 'discounted gym membership only this week'.
          The ativities would propagate throught the database accordingly.
          The app provides a sorted card view of all the activities in the area, as well as
          a map view with markers. Users can also search for specific activities or businesses.
          The app implements various google APIs to colled and store data about businesses via thier
          google Business ID. The app leverages cheaper MapBox API for the map view, as well as verious calculations
          to determine the distance between the user and the business."
          technologies={[
            "React",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Prisma",
            "MySQL",
          ]}
          liveLink="https://aletheia2.vercel.app/"
          githubLink="https://github.com/Robert-Safin/aletheia2"
          slideTimer={3000}
        />
        <ProjectCard
          images={[
            "/projects/fav/fav1.png",
            "/projects/fav/fav2.png",
            "/projects/fav/fav3.png",
          ]}
          title="Product social media platform"
          description="description"
          technologies={[
            "React",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "MongoDB",
            "Mongoose",
          ]}
          liveLink="https://favolist-bice.vercel.app/"
          githubLink="https://github.com/Robert-Safin/favolist"
          slideTimer={4000}
        />
        <ProjectCard
          images={[
            "/projects/link/link2.png",
            "/projects/link/link3.png",
            "/projects/link/link4.png",
          ]}
          title="Link sharing app"
          description="description"
          technologies={[
            "React",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "PostgreSQL",
            "Prisma",
          ]}
          liveLink="https://link-to-sigma.vercel.app/"
          githubLink="https://github.com/Robert-Safin/linkTo"
          slideTimer={5000}
        />
        <ProjectCard
          images={[
            "/projects/r3f/ref1.png",
            "/projects/r3f/ref2.png",
            "/projects/r3f/ref3.png",
            "/projects/r3f/ref4.png",
          ]}
          title="React Three.Js Fiber Expo"
          description="description"
          technologies={[
            "React",
            "Three.js",
            "React/Fiber",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
          ]}
          liveLink="https://r3f-demo-tau.vercel.app/"
          githubLink="https://github.com/Robert-Safin/3D-site"
          slideTimer={6000}
        />
      </div>
    </div>
  );
};

export default Projects;
