import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.png";
import { motion } from "framer-motion";

const motionContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:p-8">
        <div className="w-full mb-5 lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start lg:ml-16">
            <motion.h1
              variants={motionContainer(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-5xl lg:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hey, I'm Dmytro
            </motion.h1>
            <motion.span
              variants={motionContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:text-5xl tracking-tight"
            >
              Software Engineer
            </motion.span>
            <motion.div
              variants={motionContainer(1)}
              initial="hidden"
              animate="visible"
            >
              <p className="my-2 max-w-xl py-6 text-xl lg:text-2xl text-neutral-400 font-light tracking-tighter text-justify">
                {HERO_CONTENT}
              </p>
              <div className="flex w-full justify-end">
              <button className="shadow-none hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] px-4 py-1 border-2 rounded-md text-neutral-400 hover:text-neutral-300 border-neutral-500 hover:border-neutral-400 transition-all duration-700">
                Download CV
              </button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              className="rounded-2xl"
              src={profilePic}
              alt="Dmytro Lukashenko"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
