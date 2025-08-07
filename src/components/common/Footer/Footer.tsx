import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.Footer}>
      {Array.from({ length: 5 }, (i) => (
        <div key={Math.random()}>
          <p>
            <span style={{ color: 'magenta' }}> atom </span> version next-template
          </p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
