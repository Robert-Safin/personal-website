"use client";
import { motion } from "motion/react";
import { FC, useMemo } from "react";
import { IconType } from "react-icons";

type Props = {
  name: string;
  Icon: IconType;
  color: string;
  delay: number;
};

const LanguageCard: FC<Props> = ({ name, Icon, color, delay }) => {
  const MotionIcon = useMemo(() => motion.create(Icon), [Icon]);

  return (
    <motion.div className="w-full">
      <MotionIcon
        className="w-10 h-10 md:w-20 md:h-20 text-white mx-auto"
        whileInView={{ color: color }}
        transition={{ duration: 0.6, delay: delay }}
        opacity={0.85}
      />
      <p className="text text-center mt-1 md:mt-3">{name}</p>
    </motion.div>
  );
};

export default LanguageCard;
