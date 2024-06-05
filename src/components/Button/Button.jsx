/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ text, icon: Icon, type, className  }) {
  return (
    <button
      type={type}
      href="https://www.linkedin.com/in/mohamad-rafiq-daud-a58441248/"
      className={`text-white bg-black rounded-full font-medium text-md px-5 ${Icon ? 'py-2.5' : 'py-3'}  me-2 mb-2 uppercase font-dharma tracking-widest relative overflow-hidden button-riple ${className}`}
    >
      <span className="text-center inline-flex items-center relative z-[1]">
        {Icon && <Icon className="mr-2" />}
        {text}
      </span>
    </button>
  );
}

export default Button;
