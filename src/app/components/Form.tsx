"use client";

import { FC } from "react";

interface Props {}

const Form: FC<Props> = (props) => {
  return (
    <form className="flex flex-col space-y-8 mt-8 pb-16 xl:w-1/2">
      <input
        className="placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="NAME"
      />

      <input
        className="placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="EMAIL"
      />

      <textarea
        rows={4}
        className=" placeholder:text-lightGray headerM font-extralight text-white tracking-widest text-[16px] text-left bg-darkGray border-b pb-4 pl-8"
        placeholder="MESSAGE"
      />

      <div className="flex justify-end">
        <button className="hover:text-green headerM text-white text-[16px] tracking-widest border-b-2 border-green pb-1 w-fit">
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default Form;
