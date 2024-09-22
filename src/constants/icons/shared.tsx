import React from 'react';

export enum SharedIcons {
  MENU = 'MENU', // width='43' height='21' viewBox='0 0 43 21' fill='none'>
}

export const sharedIcons = {
  [SharedIcons.MENU]: (
    <path
      d='M3.5 6.18555H39.5M3.5 14.1855H32'
      stroke='white'
      strokeOpacity='0.9'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
};
