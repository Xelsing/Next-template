import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

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

      <section className={s.Center}>
        <div>
          <div className={s.DivRow}>
            <p>button:</p>
            <Button>test button</Button>

            <p>icon:</p>
            <Icon icon={ALL_ICONS.MENU} viewBox={'0 0 43 21'} className={s.IconMenu} />
          </div>

          <div className={s.DivRow}>
            <div className={s.Wrapper}>
              <ul>
                <p>list without className</p>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className={s.DivRow}>
            <p className={s.TextImage}>static image use:</p>
            <div className={clsx(s.VercelLogo, s.VercelLogo_rel)}>
              <Image src='/nextjs-192x192.png' alt='Next Logo' fill priority />
            </div>
          </div>
          <div className={s.DivRow}>
            <p className={s.TextImage}>dynamical image use:</p>
            <ImageWrapper
              src='/nextjs-192x192.png'
              alt='Next Logo'
              className={clsx(s.VercelLogo, s.VercelLogo_alt)}
              fill
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
