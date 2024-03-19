import React, { ReactNode } from 'react';

import s from './Button.module.scss';

type PropsType = {
  children: ReactNode;
}

const Button = ({children}: PropsType) => {
  return (
    <button className={s.Button}>
      {children}
    </button>
  );
};

export default Button;
