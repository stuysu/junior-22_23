import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/NavBar.module.css';

const pages = [
  ["Home", "/"],
  ["Members", "/members"],
];

export default function NavBar({ currentPage }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarCaucusLogo}>
        <Link href="/">
          <Image
            src="/logos/juniorcaucus.svg"
            width={64}
            height={64}
            alt=""
          />
        </Link>
      </div>

      <div className={styles.navbarSocials}>
        <Link href="https://www.facebook.com/StuyJuniorCaucus/">
          <Image
            src="/logos/facebook.svg"
            width={80}
            height={64}
            alt=""
          />
        </Link>
        <Link href="https://www.instagram.com/stuyjuniorcaucus/">
          <Image
            src="/logos/instagram.svg"
            width={80}
            height={64}
            alt=""
          />
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        {
          pages.map(([page, link]) => {
            if (page != currentPage) {
              return <Link href={link}><p className={styles.navbarLinkClickable}>{page}</p></Link>;
            } else {
              return <p className={styles.navbarLinkUnclickable}>{page}</p>;
            }
          })
        }
      </div>
    </div>
  );
}
