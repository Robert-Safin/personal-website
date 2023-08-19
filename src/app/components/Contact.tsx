import SMTPTransport from "nodemailer/lib/smtp-transport";
import Form, { ContactFormData } from "./Form";
import nodemailer from "nodemailer";

const Contact = async () => {
  const returnFormData = async (formData: ContactFormData) => {
    "use server";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.APP_PASS,
      },
    }as SMTPTransport.Options);

    try {
      const res = await transporter.sendMail({
        from: "My Website",
        to: "robsafin98@gmail.com",
        subject: "New Contact Form Submission",
        text: `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="flex flex-col xl:flex-row xl:justify-between bg-darkGray xl:px-32 xl:space-x-32 w-full xl:text-left text-center py-16 px-4">
      <div className="xl:w-1/2">
        <h1 className="headerL mb-8 tracking-widest">Contact</h1>
        <p className="text tracking-wide">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I`ll get back to you as soon as possible.
        </p>
      </div>
      <Form returnFormData={returnFormData} />
    </div>
  );
};

export default Contact;
