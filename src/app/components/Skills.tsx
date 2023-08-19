const Skills = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 mx-auto text-center
      md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 pb-8 md:mt-20 md:pb-20
      "
      >
        <div>
          <h1 className="headerM md:headerL">HTML/CSS</h1>
          <h2 className="text">Bootstrap Tailwind</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">TypeScript</h1>
          <h2 className="text">JavaScript</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">React</h1>
          <h2 className="text">Next.js</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Node</h1>
          <h2 className="text">Express.js</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Databases</h1>
          <h2 className="text">Postgres MongoDB Prisma</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Ruby</h1>
          <h2 className="text">Ruby on Rails</h2>
        </div>
      </div>
    </>
  );
};

export default Skills;
