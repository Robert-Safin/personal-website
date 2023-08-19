import Form from "./Form";

const Contact = async () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between bg-darkGray xl:px-32 xl:space-x-32 w-full xl:text-left text-center py-16 px-4">
      <div className="xl:w-1/2">
        <h1 className="headerL mb-8 tracking-widest">Contact</h1>
          <p className="text tracking-wide">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I`ll get back to you as soon as possible.
          </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
