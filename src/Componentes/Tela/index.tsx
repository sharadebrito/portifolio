import { Apresentacao } from "../Apresentacao";
import { Header } from "../Header";
import { Sobre } from "../Sobre";
import styles from "./styles.module.css";
import { Contato } from "../Contato";
import { Cards } from "../Projetos/Cards";
import { Footer } from "../Footer";

export function Tela() {
  return (
    <div className={styles.tela}>
      <Header />
      <Apresentacao />
        <hr />
      <Sobre />
        <hr />
      <Cards/> 
        <hr />
      <Contato/>
      <Footer/>
    </div>
  );
}
