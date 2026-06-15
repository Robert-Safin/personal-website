"use client";
import { motion } from "motion/react";
import { useMemo } from "react";

const services = [
  "Website Development",
  "Web Application Development",
  "Content Management Solutions",
  "API & Backend Development",
  "Integrations & Automation",
  "Web Scrapping",
  "Mobile Development",
  "Web Design",
  "Data Cleaning",
  "Data Engineering",
  "Data Pipelines",
  "Hosting & Maintenance",
  "AI Tooling",
];

const Services = () => {
  // random delay per item, computed once so re-renders don't reshuffle
  const delays = useMemo(() => services.map(() => Math.random() * 1.2), []);

  return (
    <div className="py:8 md:py-16 border-b">
      <motion.h1
        className="headerL text-[40px] tracking-wide pb-10"
        initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        // viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Services
      </motion.h1>

      <div
        className="grid grid-cols-1 mx-auto text-center
        md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-20"
      >
        {services.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delays[i] }}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="headerM text-left">{service}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
