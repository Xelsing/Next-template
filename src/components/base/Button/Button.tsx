import React, { ReactNode } from 'react';

import s from './Button.module.scss';

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: PropsType) => {
  return (
    <button className={s.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
