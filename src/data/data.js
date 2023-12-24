import mock1 from '/mockup1.png';
import mock2 from '/mockup2.png';
import mock3 from '/mockup3.png';
import mock4 from '/mockup4.png';

export const navLinks = [
  {
    id: 1,
    path: '/about',
    text: '01.about',
  },
  {
    id: 2,
    path: '/portfolio',
    text: '02.Portfolio',
  },
  {
    id: 3,
    path: '/contact',
    text: '03. contacts',
  },
];

export const portfolios = [
  {
    id: 1,
    heading: 'Mind ; Land App',
    text: 'website application as a consultation platform about mental health problems',
    link: 'https://mindland.netlify.app',
    imgurl: mock1,
  },
  {
    id: 2,
    heading: 'Sprite UI Design',
    text: 'User interface design for sprite products as a task from GDSC',
    link: 'https://www.figma.com/file/Rz7k70CzkVybnbsOG4mjx1/sprite-website-ui?type=design&mode=design&t=gmrkY5K43ZPUhhwC-1',
    imgurl: mock2,
  },
  {
    id: 3,
    heading: 'Poster Design',
    text: 'poster design with the theme of traditional Gorontalo food',
    link: '',
    imgurl: mock3,
  },
  {
    id: 4,
    heading: 'After Taste App',
    text: 'restaurant catalog application with the implementation of a progressive web application',
    link: 'https://after-taste.netlify.app',
    imgurl: mock4,
  },
];
