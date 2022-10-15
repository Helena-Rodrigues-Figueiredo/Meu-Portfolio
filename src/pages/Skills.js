import styles from '../styles/Skills.module.css';
import { useState, useEffect } from 'react';
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
  const [iconSize, setIconSize] = useState();

  useEffect(() => {
    const newWidth = window.innerWidth;
    if (newWidth <= 480) {
      return setIconSize(40);
    } else {
      setIconSize(100);
    }
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      if (newWidth <= 480) {
        return setIconSize(40);
      }
      setIconSize(100);
    };
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <section className={styles.skills}>
        <h1 className={styles.h1skills}>Habilidades</h1>
        <div className={styles.skillscontainer}>
          <div className={styles.skill}>
            <FaCss3Alt className="css" size={iconSize} />
            <h2>CSS</h2>
          </div>
          <div className={styles.skill}>
            <FaHtml5  size={iconSize} />
            <h2>HTML</h2>
          </div>
          <div className={styles.skill}>
            <FaNodeJs size={iconSize} />
            <h2>Node</h2>
          </div>
          <div className={styles.skill}>
            <FaJs size={iconSize} />
            <h2>Javascript</h2>
          </div>
          <div className={styles.skill}>
            <FaGithub size={iconSize} />
            <h2>Github</h2>
          </div>
          <div className={styles.skill}>
            <FaGitAlt size={iconSize} />
            <h2>Git</h2>
          </div>
          <div className={styles.skill}>
            <FaReact size={iconSize} />
            <h2>React</h2>
          </div>
          <div className={styles.skill}>
            <SiRedux size={iconSize} />
            <h2>Redux</h2>
          </div>
          <div className={styles.skill}>
            <FaDocker size={iconSize} />
            <h2>Docker</h2>
          </div>
          <div className={styles.skill}>
            <GrMysql size={iconSize} />
            <h2>MySQL</h2>
          </div>
          <div className={styles.skill}>
            <SiJest size={iconSize} />
            <h2>Jest</h2>
          </div>
          <div className={styles.skill}>
            <SiTypescript size={iconSize} />
            <h2>Typescript</h2>
          </div>
          <div className={styles.skill}>
            <TbBrandNextjs size={iconSize} />
            <h2>Next</h2>
          </div>
        </div>
      </section>
    </>
  );
}
