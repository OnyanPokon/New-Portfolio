/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { React } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Section/Hero';
import About from '../components/Section/About';
import Thankyou from '../components/Section/Thankyou';
import '../index.css';
import { skill } from '../data/data';

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
      <div className="bg-black" id="portfolio">
        <section
          className="max-w-screen-xl mx-auto flex flex-col pt-32 items-center gap-16"
          id="portfolio"
        >
          <div className="flex flex-col text-gray items-center uppercase">
            <span className="lg:text-[10rem] text-[5rem] font-dharma font-bold leading-none">
              my
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
            {
              skill.map((item) => (
                <div key={item.id} className=" flex items-end gap-12 border-b border-gray py-10">
                  <span className="font-incon text-2xl">{`0.${item.id}`}</span>
                  <p className="lg:text-6xl">{item.heading}</p>
                  <div className="relative group">
                    <div
                      className="w-16 h-16 lg:block hidden p-4  bg-white rounded-xl origin-bottom-right rotate-12 group-hover:rotate-0 transition-transform duration-300"
                    />
                    <img className="absolute w-full h-full p-3 object-contain bg-black/70  backdrop-blur-sm top-0 right-0 bottom-0 left-0 rounded-xl" src={item.imageUrl} />
                  </div>
                </div>
              ))
            }
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
          className="max-w-screen-lg mx-auto px-6 pt-20 overflow-x-hidden overflow-y-visible "
          id="contact"
        >
          <div className="bg-white opacity-[0.95] rounded-lg z-20 w-full overflow-x-hidden flex flex-col items-center py-20 backdrop-blur-3xl">
            <div className="flex flex-col mb-6 text-black items-center uppercase leading-none">
              <h2 className="lg:text-[4rem] text-[3rem] font-dharma font-bold text-center">
                Interest With Me, Aren't You?
              </h2>
            </div>
            <div className="flex items-center max-w-md px-6 lg:text-sm text-xs">
              <p className="text-center">
                I can
                't wait to collaborate with you. Don
                't forget to reach out to me if you want to build something
                extraordinary together.
              </p>
            </div>
            <div className="flex gap-2 mt-10 flex-wrap items-center justify-center px-6">
              <a
                href="https://www.linkedin.com/in/mohamad-rafiq-daud-a58441248/"
                className="text-white bg-black rounded-full font-medium text-md px-5 py-2.5  me-2 mb-2 uppercase font-dharma tracking-widest relative overflow-hidden button-riple "
              >
                <div className="text-center inline-flex items-center relative z-[1]">
                  <span>
                    <FaLinkedin className="mr-2 h-4 w-4" />
                  </span>
                  Linked in
                </div>
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
        <section className="max-w-screen-xl mx-auto flex flex-col px-20 py-20 gap-5 font-incon uppercase text-black">
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
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold">main colors</span>
              <div className="inline-flex items-center gap-x-2">
                <div className="w-4 h-4 bg-violet rounded-full" />
                violet: #5739fb
              </div>
              <div className="inline-flex items-center gap-x-2">
                <div className="w-4 h-4 bg-black rounded-full" />
                black: #1F1F1F
              </div>
              <div className="inline-flex items-center gap-x-2">
                <div className="w-4 h-4 border border-black bg-gray rounded-full" />
                gray: #E6E6E6
              </div>
              <div className="inline-flex items-center gap-x-2">
                <div className="w-4 h-4 bg-white rounded-full" />
                white: #E6E6E6
              </div>
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
