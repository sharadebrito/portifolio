import { LuMapPinCheck } from "react-icons/lu";
import { GrTask } from "react-icons/gr";
import { LuSearchCheck } from "react-icons/lu";
import { CiBaseball } from "react-icons/ci";
import { Projetos } from "..";
import styles from "./styles.module.css";

export function Cards() {
  return (
    <section id="projetos">
      <div>
        <h1>PROJETOS</h1>
        <div className={styles.projetosContainer}>
          <Projetos
            Icon={<LuMapPinCheck size={80} color="#444444" />}
            Nome="Buscar CEP"
            Descricao="Consulta de endereços em tempo real via API ViaCEP."
            Tecnologias="HTML | CSS | JavaScript | React"
            Link="https://github.com/sharadebrito/project-cep"
          />

          <Projetos
            Icon={<GrTask size={80} color="#444444" />}
            Nome="Gerenciador de Tarefas"
            Descricao="Gerenciador de tarefas com status e edição dinâmica."
            Tecnologias="HTML | CSS | JavaScript | React"
            Link="https://github.com/sharadebrito/board"
          />

          <Projetos
            Icon={<LuSearchCheck size={80} color="#444444" />}
            Nome="Análise de Vendas"
            Descricao="Análise de dados de vendas com visualizações interativas."
            Tecnologias="Python | Pandas | Plotly Express"
            Link="https://github.com/sharadebrito/analise-de-vendas/blob/main/Curso_Basico_Python.ipynb"
          />

          <Projetos
            Icon={<CiBaseball size={80} color="#444444" />}
            Nome="Sporting Manager"
            Descricao="Tela de cadastro com integração a API REST."
            Tecnologias="HTML | CSS | JavaScript | React | Axios"
            Link="https://github.com/sharadebrito/cadastro-sm"
          />
        </div>
        <div className={styles.button}>
          <button
            className={styles.ver}
            onClick={() =>
              window.open(
                "https://github.com/sharadebrito?tab=repositories",
                "_blank"
              )
            }
          >
            VER OUTROS
          </button>
        </div>
      </div>
    </section>
  );
}
