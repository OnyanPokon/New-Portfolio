import { React, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
// import { motion, useDragControls } from 'framer-motion';
import Plus from '../components/Plus';
import react from '../assets/react.svg';
// import Portfolio from '../components/Portfolio/Portfolio';
import Carousel from '../components/Carousel/Carousel';

function Homepage() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      const text = new SplitType('.hello', { types: 'chars' });
      const { chars } = text;

      gsap.fromTo(
        chars,
        {
          scale: 1.2,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.1,
          duration: 2,
          ease: 'power4.out',
        },
      );
    }
  }, [inView]);

  return (
    <>
      <div className="min-h-screen flex items-center px-4 bg-gray">
        <section className="max-w-screen-xl mx-auto flex flex-col justify-center w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8">
              <img
                className="w-16 h-16 rounded-full ring-2 ring-gray "
                src="/rafiq.jpg"
                alt="Rounded avatar"
              />
              <img
                className="w-16 h-16 rounded-full animate-spin-slow"
                src={react}
                alt="Rounded avatar"
              />
            </div>
            <div className="font-incon text-center text-xs uppercase">
              <p>
                Welcome to my portfolio website
                {' '}
                <br />
                {' '}
                [use dekstop for better
                experience]
              </p>
            </div>
          </div>
          <div className="flex lg:justify-between justify-center items-center">
            <div className="hidden lg:block">
              <Plus size="50" />
            </div>
            <div className="text-center uppercase" ref={ref}>
              <h1 className="hello font-dharma font-semibold lg:text-[25rem]  text-[10rem] leading-none cursor-default ">
                h
                <span className="text-violet">el</span>
                lo
                {' '}
                <span className="text-violet">!</span>
              </h1>
            </div>
            <div className="hidden lg:block">
              <Plus size="50" />
            </div>
          </div>
          <div className="flex justify-around font-incon uppercase tracking-wider text-xs lg:text-base">
            <span className="text-right">
              a portfolio website
              {' '}
              <br />
              to inspire you
            </span>
            <span>
              made by
              {' '}
              <br />
              rafiq daud
            </span>
            <span>
              <a
                href="https://github.com/OnyanPokon"
                className="hover:text-violet"
              >
                /Github
              </a>
            </span>
          </div>
        </section>
      </div>
      <div className="bg-gray">
        <section className="max-w-screen-xl mx-auto flex justify-around items-start lg:gap-20 py-20 lg:px-28 px-10 gap-5">
          <div>
            <img src="/arrow.svg" alt="" className="w-80" />
          </div>
          <div className=" lg:pr-40 flex flex-col lg:gap-20 gap-10">
            <p className="lg:text-4xl text-lg tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptatibus, ut esse nisi quia rerum temporibus aliquid impedit
              voluptates vero, minima iste sunt iusto molestias?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Laborum, nam?
            </p>
            <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
              [ ready to stand out? ]
            </span>
          </div>
        </section>
      </div>
      <div className="bg-gray">
        <section className="max-w-screen-xl mx-auto flex justify-center items-center lg:px-32 px-10 py-20">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-36 gap-20">
            <div className="flex flex-col gap-4">
              <div className="font-dharma lg:text-[15rem] text-[8rem] font-semibold leading-none">
                01
              </div>
              <hr />
              <div className="flex flex-col gap-4">
                <h2 className="font-dharma uppercase md:text-6xl text-4xl font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
                <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
                  [ ready to stand out? ]
                </span>
                <p className="lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis qui nulla, tempora nostrum dolores aliquid ipsam
                  voluptates minus aspernatur enim? Nulla excepturi voluptas
                  inventore consequatur eius consequuntur, iure totam sed.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-dharma lg:text-[15rem] text-[8rem] font-semibold leading-none">
                02
              </div>
              <hr />
              <div className="flex flex-col gap-4">
                <h2 className="font-dharma uppercase md:text-6xl text-4xl font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
                <span className="font-incon uppercase lg:text-base text-xs tracking-wider">
                  [ ready to stand out? ]
                </span>
                <p className="lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis qui nulla, tempora nostrum dolores aliquid ipsam
                  voluptates minus aspernatur enim? Nulla excepturi voluptas
                  inventore consequatur eius consequuntur, iure totam sed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray">
        <section className="py-20">
          <Marquee speed={200}>
            <p className="font-dharma font-bold leading-none overflow-hidden lg:text-[20rem] text-[10rem] transparent font-outline uppercase">
              MOHAMAD RAFIQ DAUD\
            </p>
          </Marquee>
          <Marquee
            direction="right"
            speed={200}
            className="font-dharma font-bold overflow-hidden leading-none lg:text-[20rem] text-[10rem] text-white uppercase"
          >
            <p>UIUX DESIGNER/FRONT END DEVELOPER/</p>
          </Marquee>
        </section>
      </div>
      <div className="bg-black ">
        <section className="max-w-screen-xl mx-auto flex flex-col pt-32 items-center gap-16">
          <div>
            <img
              src="/gray.svg"
              alt=""
              className="lg:w-32 w-20 animate-spin-slow"
            />
          </div>
          <div className="flex flex-col text-gray items-center uppercase">
            <span className="lg:text-[10rem] text-[5rem] font-dharma font-bold leading-none">
              this my
            </span>
            <h2 className="lg:text-[10rem] text-[5rem] font-dharma font-bold leading-none">
              Portfolio
            </h2>
          </div>
        </section>
        {/* <section className="flex overflow-x-auto py-16 px-32 scrollbar-hide">
          <div className="w-[60rem] flex-shrink-0 p-6 border border-gray ">
            <Portfolio />
          </div>
          <div className="w-[60rem] flex-shrink-0 p-6 border border-gray">
            <Portfolio />
          </div>
        </section> */}
        <Carousel />
        <section className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </section>
      </div>

    </>
  );
}

export default Homepage;
