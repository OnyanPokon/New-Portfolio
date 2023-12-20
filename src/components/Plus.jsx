import React from 'react';
import PropTypes from 'prop-types';

function Plus({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="#E6E6E6" />
      <line x1="51" y1="11" x2="51" y2="90" stroke="black" strokeWidth="2" />
      <line x1="90" y1="51" x2="11" y2="51" stroke="black" strokeWidth="2" />
    </svg>
  );
}

Plus.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Plus;
