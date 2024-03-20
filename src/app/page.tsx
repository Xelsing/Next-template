'use client';
import styles from './page.module.scss';
import { Button, Icon, Image } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

export default function Home() {
  return (
    <main className={styles.Home}>
      <div className={styles.Line}>
        <p>Get started by editing</p>

        <Image
          src="/next.svg"
          alt="Next Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </div>

      <div className={styles.center}>
        <div className={styles.DivRow}>
          button:
          <Button>test button</Button>
        </div>
        <div className={styles.DivRow}>
          icon:
          <Icon icon={ALL_ICONS.MENU} viewBox={'0 0 43 21'} className={styles.IconMenu} />
        </div>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}
