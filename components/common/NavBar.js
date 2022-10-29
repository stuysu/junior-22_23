import Link from "next/link";

import styles from "../../styles/components/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img src="logos/juniorcaucus.svg" className={styles.navbarCaucusLogo} />
      </Link>

      <div className={styles.navbarSocials}>
        <Link href="https://www.facebook.com/StuyJuniorCaucus/">
          <img src="logos/facebook-logo.svg" />
        </Link>
        <Link href="https://www.instagram.com/stuyjuniorcaucus/">
          <img src="logos/instagram-logo.svg" />
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        <Link href="/">
          Home
        </Link>
        <Link href="/members">
          Members
        </Link>
      </div>
    </div>
  )
}
