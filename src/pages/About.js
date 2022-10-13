import styles from '../styles/About.module.css';
import photo from '../assets/images/fotoHelena.jpeg'

export default function About() {
  return (
    <>
      <section className={styles.aboutme}>
        <img src={photo} alt="foto helena" className={ styles.photo } />
        <div className={styles.contentaboutme}>
          <h1 className={styles.h1aboutme}>Sobre Mim</h1>
          <p className={styles.paboutme}>
            Meu nome é Helena Rodrigues Figueiredo, tenho 30 anos, moro em Belo
            Horizonte-MG e sou formada em Engenharia Civil pela UniBH. No
            momento estou em transição de carreira para a área de
            Desenvolvimento Web, realizando o curso Web Full Stack na Trybe.{' '}
            <br></br> <br></br>
            Sempre tive muita curiosidade pela área de tecnologia, e inclusive
            fiz algumas matérias na graduação relacionadas à programação. Após
            minha formação, optei por não seguir carreira na engenharia e este ano
            estou dedicado meu tempo exclusivamente aos estudos para me
            tornar uma pessoa desenvolvedora. <br></br> <br></br>
            Atualmente em meu curso, já finalizei os módulos de Fundamentos Web
            e Front-end e estou estudando o módulo de Back-end.
          </p>
        </div>
      </section>
    </>
  );
}
