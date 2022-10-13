import Image from 'next/image';
import Logo from '../images/logo.png';
import Link from 'next/link';
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Image src={Logo} width={70} height={50} alt="logo" id="logo" />
        <ul className={styles.navmenu}>
          <li className={styles.navitem}>
            <Link href="/" className={styles.navlink}>
              Home
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/about" className={styles.navlink}>
              Sobre Mim
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/skills" className={styles.navlink}>
              Habilidades
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/projects" className={styles.navlink}>
              Projetos
            </Link>
          </li>
        </ul>
        <div className={styles.hamburguer}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}
