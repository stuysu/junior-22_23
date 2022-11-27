import ImageLink from './ImageLink';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

import styles from '../../styles/components/NavBar.module.css';

const pages = [
  ['Home', '/'],
  ['Members', '/members']
];

export default function NavBar({ currentPage }) {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleHamburger = event => {
    setIsHamburgerActive(current => !current);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarCaucusLogo}>
        <ImageLink
          href="/"
          src="/logos/juniorcaucus.svg"
          width={64}
          height={64}
          alt="Caucus Logo"
          external={false}
        />
      </div>

      <div className={styles.navbarSocials}>
        <ImageLink
          href="https://www.facebook.com/StuyJuniorCaucus/"
          src="/logos/logo-facebook.svg"
          width={80}
          height={64}
          alt="Facebook Logo"
          external={true}
        />
        <ImageLink
          href="https://www.instagram.com/stuyjuniorcaucus/"
          src="/logos/logo-instagram.svg"
          width={80}
          height={64}
          alt="Instagram Logo"
          external={true}
        />
      </div>

      <div className={`${styles.hamburger} ${isHamburgerActive ? styles.openedHamburger : ""}`} onClick={toggleHamburger}>
        <Image
          src="/logos/hamburger.svg"
          width={64}
          height={64}
        />
      </div>

      <div className={`${styles.navbarLinks} ${isHamburgerActive ? styles.openedHamburger : ""}`}>
        {pages.map(([page, link], index) => {
          if (page != currentPage) {
            return (
              <Link href={link} key={index}>
                <p className={styles.navbarLinkClickable} onClick={toggleHamburger}>{page}</p>
              </Link>
            );
          } else {
            return (
              <p key={index} className={styles.navbarLinkUnclickable}>
                {page}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}
