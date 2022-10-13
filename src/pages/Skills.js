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
          </div>
          <div className={styles.skill}>
            <FaHtml5 size={100} />
          </div>
          <div className={styles.skill}>
            <FaNodeJs size={100} />
          </div>
          <div className={styles.skill}>
            <FaJs size={100} />
          </div>
          <div className={styles.skill}>
            <FaGithub size={100} />
          </div>
          <div className={styles.skill}>
            <FaGitAlt size={100} />
          </div>
          <div className={styles.skill}>
            <FaReact size={100} />
          </div>
          <div className={styles.skill}>
            <SiRedux size={100} />
          </div>
          <div className={styles.skill}>
            <FaDocker size={100} />
          </div>
          <div className={styles.skill}>
            <GrMysql size={100} />
          </div>
          <div className={styles.skill}>
            <SiJest size={100} />
          </div>
          <div className={styles.skill}>
            <SiTypescript size={100} />
          </div>
          <div className={styles.skill}>
            <TbBrandNextjs size={100} />
          </div>
        </div>
      </section>
    </>
  );
}
