import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{duration: 1.5}}
      viewport={{ once: true}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-7xl" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaVuejs className="text-7xl text-[#327959]" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNuxtdotjs className="text-7xl text-[#00DC82]" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine className="text-7xl text-green-500" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
