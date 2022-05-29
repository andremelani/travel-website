import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? `${styles.open}` : `${styles.navbar}`}>
      <div className={styles.botao} >
        <div className={styles.icon} onClick={() => setMenuOpen(!menuOpen)}>
          X
        </div>
      </div>

      <div className={styles.logo}>
        {menuOpen ? (
          <>
            <img src="/images/logoAzul.png" />
            <span>Travel.co</span>
          </>
        ) : (
          <>
            <img src="/images/logo.png" />
            <span>Travel.co</span>
          </>
        )}
      </div>

      <div className={styles.links}>
        <Link href="#home">HOME</Link>

        <Link href="#about">TOURS</Link>

        <Link href="#services">EXPLORE</Link>

        <Link href="#experience">ABOUT US</Link>

        <Link href="#contact">CONTACT</Link>
      </div>
      <div className={styles.search}>
        <img src="/images/search.svg" />
      </div>
      <div className={styles.social}>
        <div className={styles.socialArea}>
          <Link href="https://www.facebook.com/profile.php?id=100014855532830">
            <img src="/images/facebook-f.svg" />
          </Link>
        </div>
        <div className={styles.socialArea}>
          <Link href="https://www.linkedin.com/in/andrelopesmelani/">
            <img src="/images/linkedin-alt.svg" />
          </Link>
        </div>
        <div className={styles.socialArea}>
          <Link href="https://www.instagram.com/melaniandre/">
            <img src="/images/instagram.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
