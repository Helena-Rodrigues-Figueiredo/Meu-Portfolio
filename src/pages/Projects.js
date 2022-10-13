import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <section className={ styles.projects }>
        <h1 className={ styles.h1projects }>Projetos</h1>
        <div className={ styles.containerprojects }>
          <div className={ styles.project }>
            <div className={ styles.imgproject }>Imagem do Projeto</div>
            <h2 className={ styles.h2project }>Em breve</h2>
            <p className={ styles.pproject }>Conhecimento utilizado</p>
          </div>
          <div className={ styles.project }>
            <div className={ styles.imgproject }>Imagem do Projeto</div>
            <h2 className={ styles.h2project }>Em breve</h2>
            <p className={ styles.pproject }>Conhecimento utilizado</p>
          </div>
          <div className={ styles.project }>
            <div className={ styles.imgproject }>Imagem do Projeto</div>
            <h2 className={ styles.h2project }>Em breve</h2>
            <p className={ styles.pproject }>Conhecimento utilizado</p>
          </div>
          <div className={ styles.project }>
            <div className={ styles.imgproject }>Imagem do Projeto</div>
            <h2 className={ styles.h2project }>Em breve</h2>
            <p className={ styles.pproject }>Conhecimento utilizado</p>
          </div>
        </div>
      </section>
    </>
  );
}