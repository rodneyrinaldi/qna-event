import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon.png";
import styles from "./index.module.css";

export default function List() {
  return (
    <main className={styles.container}>
      <div className={styles.row1}>
        <div>
          <Image src={Logo} alt="" height="96" width="96" />
        </div>
        <div>
          <h3>lista de</h3>
          <h3>perguntas</h3>
        </div>
      </div>

      <div className={styles.row2}>
        <h4>Advogado</h4>
        <p>
          Conquiste sua segurança necessária para trabalhar com tranquilidade.
        </p>
        <p>
          Disponibilize e gerencie com agilidade os contratos, procurações e
          controle seus pagamentos.
        </p>
        <p>Eficiência e qualidade a por um baixo investimento.</p>
      </div>

      <div className={styles.row3}>
        <Link href="/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  );
}
