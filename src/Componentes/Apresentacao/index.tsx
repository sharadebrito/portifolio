import styles from "./styles.module.css";
import { CiBookmarkCheck } from "react-icons/ci";

export function Apresentacao() {
  function baixarCV() {
  const link = document.createElement("a");
    link.href = "public/Curriculo - Shara Brito (1).pdf"; 
    link.download = "Curriculo-Shara-Brito.pdf"; 
    link.click();
  }

  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <h1>Shara de Brito F. Campos</h1>
        <p>
          Estou em transição de carreira para a área de tecnologia, atualmente
          cursando Análise e Desenvolvimento de Sistemas e me especializando em
          desenvolvimento de software com foco em QA e front-end.
        </p>
        <button onClick={baixarCV} className={styles.button}>
          {" "}
          <CiBookmarkCheck size={20} /> Baixar CV
        </button>
      </div>
      <img src="/sharaa.jpeg" alt="Minha Foto" className={styles.photo} />
    </div>
  );
}
