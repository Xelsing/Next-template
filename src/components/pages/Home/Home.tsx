'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Button, Icon, ImageWrapper } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

import s from './Home.module.scss';

const Home = () => {
  const firstTestRef = useRef<HTMLDivElement>(null);
  const anotherTestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstTestRef.current) {
      firstTestRef.current.style.padding = '5px 15px';
    }
  }, []);

  useEffect(() => {
    const el = document.querySelector('#anotherCase');
    if (el instanceof HTMLElement) {
      el.style.padding = '5px 15px';
    }
  }, []);

  useEffect(() => {
    if (anotherTestRef.current) {
      anotherTestRef.current.classList.add(s.AnotherClassTest);
    }
  }, []);

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
                <p>it&apos;s list, reset working</p>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>

          <div className={s.TestCaseWrapper}>
            <p>testing styles another way</p>
            <p>red border PX, green border REM</p>
            <div className={s.TestCaseOnlyPX} style={{ padding: '5px 15px' }}>
              test inline padding: &apos;5px 15px&apos;
            </div>
            <div ref={firstTestRef} className={s.TestCaseOnlyPX}>
              test js useEffect ref.current.style.padding = &apos;5px 15px&apos;;
            </div>
            <div id={'anotherCase'} className={s.TestCaseOnlyPX}>
              test js useEffect querySelector padding: &apos;5px 15px&apos;;
            </div>
            <div ref={anotherTestRef} className={s.TestCaseToRem}>
              test js useEffect add class with padding: &apos;5px 15px&apos;;
            </div>
          </div>

          <div className={clsx(s.TestCaseWrapper, s.MarginTop, s.DivGap)}>
            I think, box shadow different before, but idk what now
            <div className={clsx(s.DivRow, s.DivGap)}>
              inline px
              <div className={s.BoxShadow} style={{ boxShadow: '0 4px 12px rgba(255, 0, 0, 0.8)' }}>
                box shadow inline one
              </div>
              class rem
              <div className={clsx(s.BoxShadow, s.BoxShadowOne)}>box shadow class one</div>
            </div>
            <div className={clsx(s.DivRow, s.DivGap)}>
              inline px
              <div className={s.BoxShadow} style={{ boxShadow: '0 6px 24px rgba(255, 255, 255, 0.3)' }}>
                box shadow inline two
              </div>
              class rem
              <div className={clsx(s.BoxShadow, s.BoxShadowTwo)}>box shadow class two</div>
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
