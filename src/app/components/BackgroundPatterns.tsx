import Image from "next/image";
import { FC } from "react";

interface Props {}

const BackgroundPatterns: FC<Props> = (props) => {
  return (
    <>
      <div className="absolute flex flex-col h-full w-full -z-20">
        <Image
          src="/pattern-rings.svg"
          height={1}
          width={1}
          alt="something"
          className="w-full relative right-1/2 top-[12%] transform md:scale-[75%] xl:scale-[50%]"
        />
        <Image
          src="/pattern-circle.svg"
          height={1}
          width={1}
          alt="something"
          className="w-full relative left-[50%] top-[-4%] transform scale-[25%] xl:left-12 z-20 xl:scale-[10%] xl:-top-[60%]"
        />
        <Image
          src="/pattern-rings.svg"
          height={1}
          width={1}
          alt="something"
          className="w-full relative left-1/2 top-[0%] transform md:scale-[75%] xl:scale-[50%]"
        />
        <Image
          src="/pattern-rings.svg"
          height={1}
          width={1}
          alt="something"
          className="w-full relative right-1/2 top-[0%] transform md:scale-[75%] xl:scale-[50%]"
        />
      </div>
    </>
  );
};

export default BackgroundPatterns;
