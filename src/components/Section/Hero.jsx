import { React, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import react from '../../assets/react.svg';
import Plus from '../Plus';

function Hero() {
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
          <h1 className="hello font-dharma font-semibold lg:text-[25rem]  text-[10rem] leading-none cursor-default">
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
  );
}

export default Hero;
