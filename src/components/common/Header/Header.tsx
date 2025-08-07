import React from 'react';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.Header}>
      {Array.from({ length: 5 }, (i) => (
        <div key={Math.random()}>
          <p>
            <span style={{ color: 'magenta' }}> atom </span> version next-template
          </p>
        </div>
      ))}
    </header>
  );
};

export default Header;
