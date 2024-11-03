import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        viewport={{ once: true}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img 
            className="rounded-2xl" 
            src={aboutImg} 
            alt="About Image" 
            width={500}
            height={500}
            />
          </div>
        </motion.div>
        <motion.div
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5}}
         viewport={{ once: true}}
        className="w-full lg:w-1/2">
          <div className="py-6 my-2 flex flex-col justify-center lg:justify-start">
            <p className="max-w-xl mb-2 text-xl lg:text-2xl text-neutral-400 font-light tracking-tighter text-justify">{ABOUT_TEXT.firstParagraph}</p>
            <p className="max-w-xl text-xl lg:text-2xl text-neutral-400  font-light tracking-tighter text-justify">{ABOUT_TEXT.secondParagraph}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
