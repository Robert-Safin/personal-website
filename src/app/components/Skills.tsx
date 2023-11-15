const Skills = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 mx-auto text-center
      md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-20 mt-8 pb-8 md:mt-20 md:pb-20">
        <div>
          <h1 className="headerM md:headerL">Advanced UIs</h1>
          <h2 className="text">Client-side React</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Serverless Backends</h1>
          <h2 className="text">Server React</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Maintainable</h1>
          <h2 className="text">Front-to-back type-safety</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">Responsive Design</h1>
          <h2 className="text">From mobile to desktop</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">CMSs and Databases </h1>
          <h2 className="text">SQL and noSQL</h2>
        </div>
        <div>
          <h1 className="headerM md:headerL">From Scratch</h1>
          <h2 className="text">Unique tailored experiences</h2>
        </div>
      </div>
    </>
  );
};

export default Skills;
