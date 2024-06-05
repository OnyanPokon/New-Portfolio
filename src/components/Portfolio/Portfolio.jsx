/* eslint-disable react/prop-types */
// eslint-disable-next-line quotes
import React from "react";

function Portfolio({
  id, heading, text, imgurl, link, figma, github,
}) {
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
          {`0${id}`}
        </span>
        <h3 className="mt-6 font-dharma lg:text-4xl">{heading}</h3>
        <p className="mt-4 mb-4 font-incon uppercase text-xs lg:text-base">
          {text}
        </p>
        <div className="inline-flex gap-x-2">
          {link && (
            <a target="_blank" rel="noopener noreferrer" href={link} className="font-incon mt-4 uppercase">
              [ Watch Demo ]
            </a>
          )}
          {figma && (
            <a target="_blank" rel="noopener noreferrer" href={figma} className="font-incon mt-4 uppercase">
              [ Figma Design ]
            </a>
          )}
          {github && (
            <a target="_blank" rel="noopener noreferrer" href={figma} className="font-incon mt-4 uppercase">
              [ Github Repo ]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
