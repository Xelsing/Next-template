import React from 'react';
import Image from 'next/image';

import { Button, Icon, ImageWrapper } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

import s from './Home.module.scss';

const Home = () => {
  return (
    <main className={s.Home}>
      <section className={s.Line}>
        <p>Get started by editing</p>
        <Image style={{ filter: 'invert(1)' }} src='/next.svg' alt='Next Logo' width={100} height={24} priority />
      </section>

      <section className={s.center}>
        <div className={s.DivRow}>
          <p>button:</p>
          <Button>test button</Button>

          <p>icon:</p>
          <Icon icon={ALL_ICONS.MENU} viewBox={'0 0 43 21'} className={s.IconMenu} />
        </div>

        <div className={s.DivRow}>
          <p>static image use:</p>
          <Image src='/nextjs-192x192.png' alt='Next Logo' width={192} height={192} priority />
        </div>
        <div className={s.DivRow}>
          <p>dynamical image use:</p>
          <ImageWrapper src='/nextjs-192x192.png' alt='Next Logo' className={s.VercelLogo} fill priority />
        </div>
      </section>
    </main>
  );
};

export default Home;
