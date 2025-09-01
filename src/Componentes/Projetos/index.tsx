import styles from "./styles.module.css";
import type { ReactNode } from "react";

type ProjetoProps = {
  Icon: ReactNode;
  Nome: string;
  Descricao: string;
  Tecnologias: string;
  Link: string;
};

export function Projetos({ Nome, Descricao, Tecnologias, Icon, Link }: ProjetoProps) {
  return (
    
    <div className={styles.projetos}>
      <h2>{Nome}</h2>
      <div className={styles.icons}>{Icon}</div>
      <p>
        <b>Descrição:</b> {Descricao}
      </p>
      <p>
        <b>Tecnologias utilizadas:</b> {Tecnologias}
      </p>
       <a href={Link} target="_blank" rel="noopener noreferrer">
        <button className={styles.btnCard}>Ver Projeto</button>
      </a>
    </div>
  );
}
