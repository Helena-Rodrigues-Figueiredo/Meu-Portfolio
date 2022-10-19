import styles from '../styles/Projects.module.css';
import Pulse from 'react-reveal/Pulse';
import trivia from '../assets/images/Trivia.ico'
import trybewallet from '../assets/images/Trybewallet.png'
import pixelArt from '../assets/images/PixelArt.png'
import trybetunes from '../assets/images/Trybetunes.webp'

export default function Projects() {
  return (
    <>
      <section className={styles.projects}>
        <h1 className={styles.h1projects}>Projetos</h1>
        <Pulse>
          <div className={styles.containerprojects}>
            <div className={styles.project}>
              <div className={styles.imgproject}>
                <img src={ trivia } alt='imagem aplicação trivia' />
              </div>
              <h2 className={styles.h2project}>Trivia Game</h2>
              <button className={styles.buttonproject}>Detalhes</button>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
              <img src={ trybewallet } alt='imagem aplicação trybewallet' />
              </div>
              <h2 className={styles.h2project}>Trybewallet</h2>
              <button className={styles.buttonproject}>Detalhes</button>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
              <img src={ pixelArt } alt='imagem aplicação pixel art' />
              </div>
              <h2 className={styles.h2project}>Pixel Art</h2>
              <button className={styles.buttonproject}>Detalhes</button>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
              <img src={ trybetunes } alt='imagem aplicação trybetunes' />
              </div>
              <h2 className={styles.h2project}>Trybetunes</h2>
              <button className={styles.buttonproject}>Detalhes</button>
            </div>
          </div>
        </Pulse>
      </section>
    </>
  );
}
