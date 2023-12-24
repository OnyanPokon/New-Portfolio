/* eslint-disable react/jsx-no-comment-textnodes */
import { React } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Section/Hero';
import About from '../components/Section/About';
import Skills from '../components/Section/Skills';
import Thankyou from '../components/Section/Thankyou';
import '../index.css';

function Homepage() {
  return (
    <>
      <div className="py-28 flex items-center px-4 bg-gray overflow-x-hidden">
        <motion.img
          animate={{ x: -50, y: -100, rotate: 100 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          src="/cube.png"
          alt=""
          className="lg:w-[30rem] md:w-[20rem] w-[10rem] absolute z-10 -left-20"
        />
        <motion.img
          animate={{ x: 100, y: 100, rotate: 100 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          src="/cube.png"
          alt=""
          className="lg:w-[10rem] md:w-[6rem] w-[4rem] absolute z-3 bottom-10 filter blur-md"
        />
        <motion.img
          animate={{ x: -100, y: 100, rotate: 100 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          src="/cube.png"
          alt=""
          className="lg:w-[10rem] md:w-[6rem] w-[4rem] absolute z-20 right-4 filter blur-sm"
        />
        <Hero />
      </div>
      <div className="bg-gray w-full overflow-x-hidden" id="about">
        <About />
      </div>
      <div className="bg-gray">
        <Skills />
      </div>
      <div className="bg-gray">
        <section className="py-16 relative overflow-x-hidden h-full">
          <motion.img
            animate={{ x: -100, y: 100, rotate: 100 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            src="/cube.png"
            alt=""
            className="lg:w-[10rem] md:w-[6rem] w-[4rem] absolute z-[3] filter blur-sm "
          />
          <div className="absolute z-[3] flex justify-center items-center w-full">
            <motion.img
              animate={{ x: -100, y: 100, rotate: 100 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              src="/cylinder.png"
              alt=""
              className="lg:w-[30em] md:w-[20rem] w-[10rem]"
            />
          </div>
          <Marquee speed={200}>
            <p className="font-dharma font-bold leading-none overflow-hidden lg:text-[20rem] text-[10rem] transparent font-outline uppercase  z-20">
              MOHAMAD RAFIQ DAUD\
            </p>
          </Marquee>
          <Marquee
            direction="right"
            speed={200}
            className="font-dharma font-bold overflow-hidden leading-none lg:text-[20rem] text-[10rem] text-white uppercase z-30 tracking-wide"
          >
            <p>UIUX DESIGNER/FRONT END DEVELOPER/</p>
          </Marquee>
        </section>
      </div>
      <div className="bg-black" id="portfolio">
        <section
          className="max-w-screen-xl mx-auto flex flex-col pt-32 items-center gap-16"
          id="portfolio"
        >
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
        <Carousel />
        <section className="max-w-screen-xl mx-auto flex text-gray pb-20 px-4">
          <div className="flex flex-col w-full ">
            <div className="border-b border-gray py-5">
              <p className="font-incon uppercase">// Tools that i use</p>
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">01.</span>
              <p className="lg:text-6xl">React</p>
              <img
                src="/react.png"
                alt=""
                className="w-16 h-16 lg:block hidden"
              />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">02.</span>
              <p className="lg:text-6xl">Figma</p>
              <img
                src="/figma.png"
                alt=""
                className="w-16 h-16 hidden lg:block"
              />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">03.</span>
              <p className="lg:text-6xl">Adobe Illustrator</p>
              <img src="/ai.png" alt="" className="w-16 h-16 hidden lg:block" />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">04.</span>
              <p className="lg:text-6xl">HTML 5</p>
              <img
                src="/html.png"
                alt=""
                className="w-16 h-16 hidden lg:block"
              />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">04.</span>
              <p className="lg:text-6xl">CSS 3</p>
              <img
                src="/css.png"
                alt=""
                className="w-16 h-16 hidden lg:block"
              />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">04.</span>
              <p className="lg:text-6xl">Javascript 3</p>
              <img
                src="/javascript.png"
                alt=""
                className="w-16 h-16 hidden lg:block"
              />
            </div>
            <div className=" flex items-end gap-12 border-b border-gray py-10">
              <span className="font-incon text-2xl">05.</span>
              <p className="lg:text-6xl">Tailwind CSS </p>
              <img
                src="/tailwind.png"
                alt=""
                className="w-16 h-16 hidden lg:block"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray min-h-screen relative overflow-x-hidden">
        <motion.img
          animate={{ x: -100, y: 100, rotate: 100 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          src="/cube.png"
          alt=""
          className="lg:w-[10rem] md:w-[6rem] w-[4rem] absolute z-30 right-1"
        />
        <motion.img
          animate={{ x: -100, y: 100, rotate: 100 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          src="/cylinder.png"
          alt=""
          className="lg:w-[30rem] md:w-[6rem] w-[4rem] absolute z-3 filter blur-md"
        />
        <section
          className="max-w-screen-xl mx-auto px-6 py-20 overflow-x-hidden overflow-y-visible "
          id="contact"
        >
          <div className="bg-white opacity-[0.95] rounded-lg z-20 w-full  overflow-x-hidden flex flex-col items-center py-20 backdrop-blur-3xl">
            <div className="flex gap-4 mb-10">
              <img
                className="w-10 h-10 rounded-full ring-2 ring-gray "
                src="/rafiq.jpg"
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full animate-spin-slow"
                src="/react.png"
                alt="Rounded avatar"
              />
            </div>
            <div className="flex flex-col text-black items-center uppercase leading-none">
              <h2 className="lg:text-[8rem] text-[4rem] font-dharma font-bold">
                contact me
              </h2>
            </div>
            <div className="flex items-center max-w-md px-6 lg:text-sm text-xs">
              <p className="text-center">
                I can
                {'\''}
                t wait to collaborate with you. Don
                {'\''}
                t forget to reach out
                to me if you want to build something extraordinary together.
              </p>
            </div>
            <div className="flex gap-2 mt-10 flex-wrap items-center justify-center px-6">
              <a
                href="https://www.linkedin.com/in/mohamad-rafiq-daud-a58441248/"
                className="text-white bg-black rounded-full font-medium text-md px-5 py-2.5  me-2 mb-2 uppercase font-dharma tracking-widest relative overflow-hidden button-riple "
              >
                <span className="text-center inline-flex items-center relative z-[1]">
                  <FaLinkedin className="mr-2" />
                  Linked in
                </span>
              </a>
              <a
                href="https://www.instagram.com/rafiqdaud_?igsh=ODA1NTc5OTg5Nw=="
                className="text-white bg-black rounded-full font-medium text-md px-5 py-2.5  me-2 mb-2 uppercase font-dharma tracking-widest relative overflow-hidden button-riple "
              >
                <span className="text-center inline-flex items-center relative z-[1]">
                  <FaInstagram className="mr-2" />
                  Instagram
                </span>
              </a>
              <a
                href="https://github.com/OnyanPokon"
                className="text-white bg-black rounded-full font-medium text-md px-5 py-2.5  me-2 mb-2 uppercase font-dharma tracking-widest relative overflow-hidden button-riple "
              >
                <span className="text-center inline-flex items-center relative z-[1]">
                  <FaGithub className="mr-2" />
                  github
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Thankyou />
      <div className="bg-gray">
        <section className="max-w-screen-xl mx-auto flex flex-col px-20 py-10 gap-5 font-incon uppercase text-black">
          <div>
            <p className="">[this sites has build with]</p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-5 justify-between flex-wrap">
            <div>
              <span className="font-semibold">web development</span>
              <p>vite</p>
              <p>react</p>
              <p>tailwind</p>
              <p>custom css & js</p>
            </div>
            <div>
              <span className="font-semibold">Animation</span>
              <p>gsap</p>
              <p>framer motion</p>
            </div>
            <div>
              <span className="font-semibold">font used</span>
              <p>inconsolta</p>
              <p>dharma gothic e</p>
              <p>sans serif</p>
            </div>
            <div>
              <span className="font-semibold">main colors</span>
              <p>violet: #5739fb</p>
              <p>black: #1F1F1F</p>
              <p>gray: #E6E6E6</p>
              <p>white: #FFFFFF</p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray">
        <section className="py-16 relative overflow-x-hidden h-full">
          <motion.img
            animate={{ x: -100, y: 100, rotate: 100 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            src="/cube.png"
            alt=""
            className="lg:w-[10rem] md:w-[6rem] w-[4rem] absolute z-[3] filter blur-sm "
          />
          <div className="absolute z-[3] flex justify-center items-center w-full">
            <motion.img
              animate={{ x: -100, y: 100, rotate: 100 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              src="/cylinder.png"
              alt=""
              className="lg:w-[30em] md:w-[20rem] w-[10rem]"
            />
          </div>
          <Marquee speed={200}>
            <p className="font-dharma font-bold leading-none overflow-hidden lg:text-[20rem] text-[10rem] transparent font-outline uppercase  z-20">
              MOHAMAD RAFIQ DAUD\
            </p>
          </Marquee>
          <Marquee
            direction="right"
            speed={200}
            className="font-dharma font-bold overflow-hidden leading-none lg:text-[20rem] text-[10rem] text-white uppercase z-30 tracking-wide"
          >
            <p>UIUX DESIGNER/FRONT END DEVELOPER/</p>
          </Marquee>
        </section>
      </div>
    </>
  );
}

export default Homepage;
