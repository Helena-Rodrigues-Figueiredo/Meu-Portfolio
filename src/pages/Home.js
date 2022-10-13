import styles from '../styles/Home.module.css';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.home}>
        <Fade left>
          <div className={styles.apresimg}>
            <h1 className={styles.myname}>
              <span className={styles.hi}>Olá,</span> meu nome é
            </h1>
            <h1 className={styles.name}>
              Helena <span className={styles.figueiredo}>Figueiredo</span>
            </h1>
            <h2 className={styles.trybe}>
              <span className={styles.desenvolvedora}>Desenvolvedora</span>{' '}
              Front-End
            </h2>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/in/helena-figueiredo/"
                target="_blank"
                className={styles.linkedingithub}
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Helena-Rodrigues-Figueiredo"
                className={styles.linkedingithub}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
