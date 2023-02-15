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
  const [create, setCreate] = useState(false);
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  const sheet =
    "https://docs.google.com/spreadsheets/d/1SIuqJlYVUGrfJGJZ-r8UQ2sepgUCuIySWMPSa_EMZFg/edit?usp=sharing";

  useEffect(() => {}, []);

  function handleFocus() {
    document.getElementById("status").innerHTML = "";
  }

  function handleCreate(e) {
    e.preventDefault();
    setCreate(!create);
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  function handleRefresh() {
    console.log(1);
  }

  function FormCreate() {
    return (
      <div className={styles.block1}>
        <h3>
          Criar nova sessão{" "}
          <div>
            <a onClick={handleCreate}>
              <Image src={Logo5} alt="" height="52" width="52" />
            </a>
          </div>
        </h3>
        <h4></h4>
      </div>
    );
  }

  function FormQuestion() {
    return (
      <div className={styles.block1}>
        <h3>Faça sua pergunta</h3>
        <textarea
          name="txtQuestion"
          id="txtQuestion"
          cols="30"
          rows="5"
          onFocus={handleFocus}
        ></textarea>
        <p>
          <button onClick={handleClick}>ENVIAR</button>
        </p>
        <p id="status"></p>
      </div>
    );
  }

  function FormQuestions() {
    return (
      <div className={styles.block1}>
        <h3>
          Lista de perguntas{" "}
          <div>
            <a onClick={handleRefresh}>
              <Image src={Logo5} alt="" height="52" width="52" />
            </a>
          </div>
        </h3>
        <h4>
          <ul>
            {questions.map((quest) => (
              <li key={quest}>{quest}</li>
            ))}
          </ul>
        </h4>
      </div>
    );
  }

  function handleClick() {
    let text;
    if (confirm("Press a button!") == true) {
      const txtquestion = document.getElementById("txtQuestion").value;
      document.getElementById("txtQuestion").value = "";
      setQuestion(txtquestion);
      questions.push(txtquestion);
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
            <a href="" onClick={handleCreate}>
              <Image src={Logo} alt="" height="52" width="52" />
            </a>
            <span> </span>

            <a href="https://dev.rodneyrinaldi.com">
              <Image src={Logo2} alt="" height="52" width="52" />
            </a>
            <span> </span>

            <a href="" onClick={handleShow}>
              <Image src={show ? Logo4 : Logo3} alt="" height="52" width="52" />
            </a>
          </h1>
        </div>
      </header>

      <main>
        <div className={styles.blocks}>
          {create ? (
            <FormCreate />
          ) : show ? (
            <FormQuestion />
          ) : (
            <FormQuestions />
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

export async function getServerSideProps(context) {
  const User = await User.findOne(ctx.query.id);
  return {
    props: { User }, // will be passed to the page component as props
  };
}
