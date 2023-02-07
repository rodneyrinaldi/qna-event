import Image from "next/image";
import Logo from "../../../public/favicon.png";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header}>
          <h1>
            <Image src={Logo} alt="" height="52" width="52" />
          </h1>
          <h1>Perguntas e Respostas</h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>
          <div className={styles.block1}>
            <h3>Faça sua pergunta</h3>
            <textarea name="" id="" cols="30" rows="6"></textarea>
            <p>
              <button>ENVIAR</button>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.footer}>
          <div>
            <a>qna.rrs.net.br</a>
          </div>
          <div>
            <a>dev.rodneyrinaldi.com</a>
          </div>
          <div>
            <a>adv.rodneyrinaldi.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
