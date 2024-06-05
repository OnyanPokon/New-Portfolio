import { React, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Portfolio from '../Portfolio/Portfolio';
import { portfolios } from '../../data/data';

function Carousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex lg:px-20 px-10">

          {portfolios.map((portfolio) => (
            <div className="w-[40rem] lg:w-[60rem] flex-shrink-0 p-10 border border-gray">
              <Portfolio
                id={portfolio.id}
                heading={portfolio.heading}
                text={portfolio.text}
                imgurl={portfolio.imgurl}
                link={portfolio.link}
                figma={portfolio.figma}
              />
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default Carousel;
