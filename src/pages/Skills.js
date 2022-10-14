import styles from '../styles/Skills.module.css';
import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaReact,
  FaDocker,
} from 'react-icons/fa';
import { SiRedux, SiJest, SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Skills() {
  return (
    <>
      <section className={styles.skills}>
        <h1 className={styles.h1skills}>Habilidades</h1>
        <div className={styles.skillscontainer}>
          <div className={styles.skill}>
            <FaCss3Alt size={100} />
            <h2>CSS</h2>
          </div>
          <div className={styles.skill}>
            <FaHtml5  size={100} />
            <h2>HTML</h2>
          </div>
          <div className={styles.skill}>
            <FaNodeJs size={100} />
            <h2>Node</h2>
          </div>
          <div className={styles.skill}>
            <FaJs size={100} />
            <h2>Javascript</h2>
          </div>
          <div className={styles.skill}>
            <FaGithub size={100} />
            <h2>Github</h2>
          </div>
          <div className={styles.skill}>
            <FaGitAlt size={100} />
            <h2>Git</h2>
          </div>
          <div className={styles.skill}>
            <FaReact size={100} />
            <h2>React</h2>
          </div>
          <div className={styles.skill}>
            <SiRedux size={100} />
            <h2>Redux</h2>
          </div>
          <div className={styles.skill}>
            <FaDocker size={100} />
            <h2>Docker</h2>
          </div>
          <div className={styles.skill}>
            <GrMysql size={100} />
            <h2>MySQL</h2>
          </div>
          <div className={styles.skill}>
            <SiJest size={100} />
            <h2>Jest</h2>
          </div>
          <div className={styles.skill}>
            <SiTypescript size={100} />
            <h2>Typescript</h2>
          </div>
          <div className={styles.skill}>
            <TbBrandNextjs size={100} />
            <h2>Next</h2>
          </div>
        </div>
      </section>
    </>
  );
}
