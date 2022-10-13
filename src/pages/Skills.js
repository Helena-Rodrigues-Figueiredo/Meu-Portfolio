import styles from '../styles/Skills.module.css';

export default function Skills() {
  return (
    <>
      <section className={styles.skills}>
        <h1 className={styles.h1skills}>Habilidades</h1>
        <div className={styles.skillcontainer}>
          <div className={styles.skill}>
            <p className={styles.pskill}>
              O CSS é utilizado para estilizar um documento web. Aprendi toda a
              base de CSS, e também como fazer sites responsivos com Media
              Queries e um pouco sobre o Framework Bootstrap.
            </p>
          </div>
          <div className={styles.skill}>
            <p className={styles.pskill}>
              O HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web. Aprendi como montar a estrutura de uma página com
              HTML semântico.
            </p>
          </div>
          <div className={styles.skill}>
            <p className={styles.pskill}>
              O JavaScript é uma linguagem de programação muito utilizada hoje
              em dia. Algumas das principais coisas que aprendi em JavaScript
              foram: DOM, Eventos, Web Storage, ESC, Testes Unitários com Jest,
              HOF, Fetch API e async/await.
            </p>
          </div>
          <div className={styles.skill}>
            <p className={styles.pskill}>
              O React é uma biblioteca JavaScript utilizada para contruir
              interfaces de usuário. Estou estudando React e até o momento
              algumas das coisas que aprendi foram: Componentes com Estado,
              Ciclo de Vida dos Componentes, React Router, Testes Automatizados
              com RTL e Redux.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
