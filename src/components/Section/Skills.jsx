import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section className="max-w-screen-xl mx-auto flex justify-center items-center lg:px-32 px-10 py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-36 gap-20">
        <motion.div
          initial={{ filter: 'blur(10px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="font-dharma lg:text-[15rem] text-[8rem] font-semibold leading-none">
            0
            <span className="text-violet">1</span>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <h2 className="font-dharma uppercase md:text-6xl text-4xl font-semibold">
              Front end web developer [ react javascript ]
            </h2>
            <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
              [ ready to stand out? ]
            </span>
            <p className="lg:text-lg">
              My main role is as a front developer, where I enjoy compiling
              UI using React, consuming APIs using React Query and Axios,
              and so on. With the portfolio that I have now, I have almost 1
              year of experience in the world of front and web development.
              I really enjoy building a responsive website with an
              attractive appearance
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ filter: 'blur(10px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="font-dharma lg:text-[15rem] text-[8rem] font-semibold leading-none">
            0
            <span className="text-violet">2</span>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <h2 className="font-dharma uppercase md:text-6xl text-4xl font-semibold">
              UI/UX and design graphic antusiast
            </h2>
            <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
              [ ready to stand out? ]
            </span>
            <p className="lg:text-lg">
              Besides being a front end web developer, I also enjoy
              designing UI displays using several tools such as Figma, I
              enjoy presenting solutions to problems in an interactive
              display design. I am also interested in colorful and modern
              poster designs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
