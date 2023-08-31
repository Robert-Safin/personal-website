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
          The activities would propagate thought the database accordingly.
          The app provides a sorted card view of all the activities in the area, as well as
          a map view with markers. Users can also search for specific activities or businesses.
          The app implements various google APIs to collect and store data about businesses via their
          google Business ID. The app leverages cheaper MapBox API for the map view, as well as various calculations
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
          description="'Favolist is a full stack social media type app. The app solves the problem of online reviews on
          products- you can never trust the reviews, as these can be faked. Favolist allows users to create a list of say
          their favorite tech gadgets and populate the list with products as well as their thoughts on the product, featuring
          a Notion type editor. You can also plug your social media accounts and affiliate links and discount codes for the product.
          The concept comes together as Favolist only shows you products/lists from people you follow and thus know or trust.
          "
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
          description="A full stack web app (similar to LinkTree) that allows users to create a profile and share links
          to their social media accounts. The app features a highly responsive design, with a mobile first approach,
          having a live preview when viewed on desktop. The app can quickly authenticate a user via OAuth powered by Clerk.
          In the end, user can create their own unique link, which they can share with others."
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
          title="3D website for a gallery"
          description="A demo of React Three.js Fiber(R3F). The website features a 3D scene with implementation of dynamic shadows,
          lights and camera movements in 3D space. The website is an example of curated user experience where a visitor is guided
          through the information in a specific order."
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
