/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function Portfolio({ id, heading, text, imgurl, link, figma }) {
  return (
    <div className="flex gap-10 items-center max-w-4xl h-full">
      <div className="w-full h-full">
        <div className="w-full h-11 rounded-t-lg bg-[#e5e7eb] flex justify-start items-center space-x-1.5 px-3">
          <span className="w-3 h-3 rounded-full bg-[#f87171]" />
          <span className="w-3 h-3 rounded-full bg-[#facc15]" />
          <span className="w-3 h-3 rounded-full bg-[#4ade80]" />
        </div>
        <img className=" border-t-0 w-full" src={imgurl} alt="mockup 1" />
      </div>
      <div className=" w-full text-gray">
        <span className="font-dharma font-bold lg:text-4xl border border-gray px-3 py-2 rounded-lg">
          0{id}
        </span>
        <h3 className="mt-6 font-dharma lg:text-4xl">{heading}</h3>
        <p className="mt-4 mb-4 font-incon uppercase text-xs lg:text-base">
          {text}
        </p>
        <div className="inline-flex gap-x-2">
          {link && (
            <a href={link} className="font-incon mt-4 uppercase">
              [ Watch Demo ]
            </a>
          )}
          {figma && (
            <a href={figma} className="font-incon mt-4 uppercase">
              [ Figma Design ]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  id: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Portfolio;
