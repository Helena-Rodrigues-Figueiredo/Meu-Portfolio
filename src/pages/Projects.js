import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import Fade from 'react-reveal/Fade';
import trivia from '../assets/images/Trivia.ico';
import trybewallet from '../assets/images/Trybewallet.png';
import pixelArt from '../assets/images/PixelArt.png';
import trybetunes from '../assets/images/Trybetunes.webp';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Projects() {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  function openModal4() {
    setIsOpen4(true);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  return (
    <>
      <section className={styles.projects}>
        <h1 className={styles.h1projects}>Projetos</h1>
        <Fade bottom big cascade>
          <div className={styles.containerprojects}>
            <div className={styles.project}>
              <div className={styles.imgproject}>
                <img src={trivia} alt="imagem aplicação trivia" />
              </div>
              <h2 className={styles.h2project}>Trivia Game</h2>
              <button className={styles.buttonproject} onClick={openModal1}>
                Detalhes
              </button>
              <Modal
                isOpen={modalIsOpen1}
                onRequestClose={closeModal1}
                contentLabel="Example Modal"
                className={styles.modalcontent}
              >
                <div className={styles.modal}>
                  <h1>Trivia Game</h1>
                  <p>
                    Esse projeto foi desenvolvido utilizando React e Redux, e
                    consiste em um jogo de perguntas e respostas onde o jogador
                    deve responder 5 perguntas, e ao final é exibido o ranking.
                  </p>
                  <div className={styles.projectlinks}>
                    <a
                      href="https://trivia-game-hm.surge.sh/"
                      className={styles.trivia}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deploy da aplicação
                    </a>
                    <a
                      href="https://github.com/Helena-Rodrigues-Figueiredo/Trivia-Game"
                      className={styles.triviarepository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório no Github
                    </a>
                  </div>
                  <button className={styles.modalbutton} onClick={closeModal1}>
                    Close
                  </button>
                </div>
              </Modal>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
                <img src={trybewallet} alt="imagem aplicação trybewallet" />
              </div>
              <h2 className={styles.h2project}>Trybewallet</h2>
              <button className={styles.buttonproject} onClick={openModal2}>
                Detalhes
              </button>
              <Modal
                isOpen={modalIsOpen2}
                onRequestClose={closeModal2}
                contentLabel="Example Modal"
                className={styles.modalcontent}
              >
                <div className={styles.modal}>
                  <h1>Trybewalllet</h1>
                  <p>
                    Projeto desenvolvido com o objetivo de exercitar e consolidar
                    alguns conceitos de React, React Router e Redux. Foi desenvolvida 
                    uma carteira de controle de gastos com conversor de moedas
                  </p>
                  <div className={styles.projectlinks}>
                    <a
                      href="https://helena-wallet.surge.sh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deploy da aplicação
                    </a>
                    <a
                      href="https://github.com/Helena-Rodrigues-Figueiredo/Trybewallet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório no Github
                    </a>
                  </div>
                  <button className={styles.modalbutton} onClick={closeModal2}>
                    Close
                  </button>
                </div>
              </Modal>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
                <img src={pixelArt} alt="imagem aplicação pixel art" />
              </div>
              <h2 className={styles.h2project}>Pixel Art</h2>
              <button className={styles.buttonproject} onClick={openModal3}>
                Detalhes
              </button>
              <Modal
                isOpen={modalIsOpen3}
                onRequestClose={closeModal1}
                contentLabel="Example Modal"
                className={styles.modalcontent}
              >
                <div className={styles.modal}>
                  <h1>Pixel Art</h1>
                  <p>
                  Neste projeto foi implementado um editor de arte com pixels. Ou 
                  seja, dada uma paleta de cores e um quadro composto por pixels, 
                  é permitido que quem usa consiga pintar o que quiser no quadro!
                  Feito com HTML, CSS e Javascript.
                  </p>
                  <div className={styles.projectlinks}>
                    <a
                      href="https://helena-rodrigues-figueiredo.github.io/Pixel_Art/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deploy da aplicação
                    </a>
                    <a
                      href="https://github.com/Helena-Rodrigues-Figueiredo/Pixel_Art"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório no Github
                    </a>
                  </div>
                  <button className={styles.modalbutton} onClick={closeModal3}>
                    Close
                  </button>
                </div>
              </Modal>
            </div>
            <div className={styles.project}>
              <div className={styles.imgproject}>
                <img src={trybetunes} alt="imagem aplicação trybetunes" />
              </div>
              <h2 className={styles.h2project}>Trybetunes</h2>
              <button className={styles.buttonproject} onClick={openModal4}>
                Detalhes
              </button>
              <Modal
                isOpen={modalIsOpen4}
                onRequestClose={closeModal4}
                contentLabel="Example Modal"
                className={styles.modalcontent}
              >
                <div className={styles.modal}>
                  <h1>Trybetunes</h1>
                  <p>
                  Projeto de desenvolvimento de uma aplicação capaz de reproduzir 
                  músicas das mais variadas bandas e artistas a partir de dados vindos 
                  da API do Itunes. Foi utilizado conhecimentos como: fazer requisição 
                  para uma API e ciclo de vida de componentes React.
                  </p>
                  <div className={styles.projectlinks}>
                    <a
                      href="trybetunes-h.surge.sh"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deploy da aplicação
                    </a>
                    <a
                      href="https://github.com/Helena-Rodrigues-Figueiredo/trybetunes-project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório no Github
                    </a>
                  </div>
                  <button className={styles.modalbutton} onClick={closeModal4}>
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}
