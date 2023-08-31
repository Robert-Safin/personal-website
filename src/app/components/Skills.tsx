const Skills = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 mx-auto text-center
      md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 pb-8 md:mt-20 md:pb-20
      "
      >
        <div>
          <h1 className="headerM md:headerL">React</h1>
          <h2 className="text">Client / Server side</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Full Stack</h1>
          <h2 className="text">Next.js / Node</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Typesafe</h1>
          <h2 className="text">TypeScript / Prisma</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Responsive Design</h1>
          <h2 className="text">TailwindCSS</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">SQL / NoSQL</h1>
          <h2 className="text">PostgreSQL / MongoDB</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">React Native</h1>
          <h2 className="text">Expo</h2>
        </div>
      </div>
    </>
  );
};

export default Skills;
