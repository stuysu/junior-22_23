import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/NavBar.module.css';

const pages = {
  Home: '/',
  Members: '/about'
};

export default function NavBar({ currentPage }) {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image
          src="/logos/juniorcaucus.svg"
          className={styles.navbarCaucusLogo}
          width={64}
          height={64}
          alt=""
        />
      </Link>

      <div className={styles.navbarSocials}>
        <Link href="https://www.facebook.com/StuyJuniorCaucus/">
          <Image
            src="/logos/facebook.svg"
            className={styles.navbarSocialsLogo}
            width={64}
            height={64}
            alt=""
          />
        </Link>
        <Link href="https://www.instagram.com/stuyjuniorcaucus/">
          <Image
            src="/logos/instagram.svg"
            className={styles.navbarSocialsLogo}
            width={64}
            height={64}
            alt=""
          />
        </Link>
      </div>

      {/* TODO: Indicate current page */}
      <div className={styles.navbarLinks}>
        <Link href="/">Home</Link>
        <Link href="/members">Members</Link>
      </div>
    </div>
  );
}
