import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../../public/favicon.png";
import Logo4 from "../../../public/list.png";
import Logo3 from "../../../public/question.png";
import Logo5 from "../../../public/refresh.png";
import Logo2 from "../../../public/rr-logo.png";
import styles from "./index.module.css";

export default function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {}, []);

  function handleFocus() {
    document.getElementById("status").innerHTML = "";
  }

  function handleRefresh() {
    alert(2);
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  function handleClick() {
    const question = document.getElementById("txtQuestion").text;
    let text;
    if (confirm("Press a button!") == true) {
      document.getElementById("txtQuestion").value = "";
      text = "Enviada com sucesso!";
    } else {
      text = "Envio cancelado!";
    }
    document.getElementById("status").innerHTML = text;
    return null;
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header}>
          <h1>
            <Image src={Logo} alt="" height="52" width="52" />
            <span> </span>
            <a href="https://dev.rodneyrinaldi.com">
              <Image src={Logo2} alt="" height="52" width="52" />
            </a>
            <span> </span>
            <a href="" onClick={handleShow}>
              <Image src={show ? Logo3 : Logo4} alt="" height="52" width="52" />
            </a>
          </h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>
          {show ? (
            <div className={styles.block1}>
              <h3>Faça sua pergunta</h3>
              <textarea
                name="txtQuestion"
                id="txtQuestion"
                cols="30"
                rows="6"
                onFocus={handleFocus}
              ></textarea>
              <p>
                <button onClick={handleClick}>ENVIAR</button>
              </p>
              <p id="status"></p>
            </div>
          ) : (
            <div className={styles.block1}>
              <h3>
                Lista de perguntas{" "}
                <div>
                  <a onClick={handleRefresh}>
                    <Image src={Logo5} alt="" height="52" width="52" />
                  </a>
                </div>
              </h3>
              <h4>{"xxx"}</h4>
              <h4>{"question"}</h4>
            </div>
          )}
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
