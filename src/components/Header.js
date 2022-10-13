import Logo from '../assets/images/logo.png'
import styles from '../styles/Header.module.css'



export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={Logo} width={70} height={50} alt="logo" id="logo" />
        <ul className={styles.navmenu}>
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
        <div className={styles.hamburguer}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}
