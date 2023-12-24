import { React, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';

function Thankyou() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      const text = new SplitType('.thank', { types: 'chars' });
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
    <div className="bg-gray py-20">
      <section className="flex justify-center items-center">
        <div className="flex flex-col items-center" ref={ref}>
          <p className="font-incon uppercase lg:text-2xl">[ this is the end of the page ]</p>
          <h2 className="thank font-dharma uppercase lg:text-[20rem] md:text-[15rem] text-[6rem] text-black leading-none mt-10">
            thank
            {' '}
            <span className="text-violet">you</span>
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Thankyou;
