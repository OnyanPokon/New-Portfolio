import { React } from 'react';

import { motion } from 'framer-motion';
import Button from '../Button/Button';

function About() {
  return (
    <section className="max-w-screen-xl mx-auto flex justify-around items-start lg:gap-20 py-20 lg:px-28 px-10 gap-5">
      <div className="hidden lg:block">
        <motion.img
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          src="/arrow.svg"
          alt=""
          className="w-80"
        />
      </div>
      <div className=" lg:pr-40 flex flex-col lg:gap-y-0-20 gap-y-10">
        <motion.p
          initial={{ filter: 'blur(10px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
          className="about lg:text-4xl text-lg tracking-wide"
        >
          I am a dedicated student pursuing a degree in Computer Science at
          Gorontalo State University, with a strong passion for Front End Web
          Development. Proficient in utilizing JavaScript frameworks such as
          React JS, I actively engage in building interactive web applications.
          I firmly believe that compelling design and intuitive interfaces play
          a pivotal role in creating exceptional user experiences.
        </motion.p>
        {/* <Button text="More About Me" className="w-fit" /> */}
        <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
          [ ready to stand out? ]
        </span>
      </div>
    </section>
  );
}

export default About;
