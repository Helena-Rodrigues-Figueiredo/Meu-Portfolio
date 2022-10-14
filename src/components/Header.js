import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={Logo} width={70} height={50} alt="logo" id="logo" />
        <ul className={`${styles.navmenu} ${active && styles.active}`}>
          <li className={styles.navitem}>
            <a href="/" className={styles.navlink}>
              Home
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/about" className={styles.navlink}>
              Sobre Mim
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/skills" className={styles.navlink}>
              Habilidades
            </a>
          </li>
          <li className={styles.navitem}>
            <a href="/projects" className={styles.navlink}>
              Projetos
            </a>
          </li>
        </ul>
        <div
          className={`${styles.hamburguer} ${active && styles.active}`}
          onClick={toggleMode}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}
