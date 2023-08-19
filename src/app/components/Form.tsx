"use client";

import { FC, FormEvent, useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  returnFormData: (formData: ContactFormData) => Promise<void>;
}

const Form: FC<Props> = (props) => {
  const [name, setName] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [send, setSend] = useState(false);

  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
      setNameErrorMessage("Name is required");
      return;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }
    if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Email is required");
      return;
    } else if (!email.match(emailRegex)) {
      setEmailError(true);
      setEmailErrorMessage("Email is not valid");
      return;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (message === "") {
      setMessageError(true);
      setMessageErrorMessage("Message is required");
      return;
    } else {
      setMessageError(false);
      setMessageErrorMessage("");
    }
    props.returnFormData({ name, email, message });
    setSend(true);
  };

  return (
    <form
      className="flex flex-col space-y-8 mt-8 pb-16 xl:w-1/2"
      onSubmit={handleSubmit}
    >
      <input
        className="placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="NAME"
        onChange={(e) => setName(e.target.value)}
      />
      {nameError && <p className="text-red text-[12px]">{nameErrorMessage}</p>}

      <input
        className="placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="EMAIL"
        onChange={(e) => setEmail(e.target.value)}
      />

      {emailError && (
        <p className="text-red text-[12px]">{emailErrorMessage}</p>
      )}

      <textarea
        rows={4}
        className=" placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="MESSAGE"
        onChange={(e) => setMessage(e.target.value)}
      />

      {messageError && (
        <p className="text-red text-[12px]">{messageErrorMessage}</p>
      )}

      {!send && <div className="flex justify-end">
        <button className="hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green pb-1 w-fit">
          SEND MESSAGE
        </button>
      </div>}
      {send && <div>
        <p className="text-green text-[12px] text-right text-2xl tracking-widest">Message sent!</p>
      </div> }
    </form>
  );
};

export default Form;
