import React from 'react';
import icons, { ALL_ICONS } from '@constants/icons';
import clsx from 'clsx';
import s from './Icon.module.scss';

type Props = {
  icon: keyof typeof ALL_ICONS;
  viewBox?: string;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Icon: React.FC<Props> = ({ icon, viewBox = '0 0 30 30', className = '', onClick }) => (
  <svg
    className={clsx({
      [s.Icon]: true,
      [className]: !!className,
    })}
    viewBox={viewBox}
    onClick={onClick}
  >
    {icons[icon]}
  </svg>
);

export default Icon;
