import styles from "./styles.module.css";

export function Sobre() {
  return (
    <section id="sobre">
      <div className={styles.box}>
        <div className={styles.sobre}>
          <h1>Sobre Mim</h1>
          <p>Estou em transição de carreira para a área de tecnologia.</p>
          <p className={styles.text}>
            Formação anterior em Enfermagem, com experiência em hospitais de
            grande porte e atuação como Enfermeira Auditora. Ao longo da minha
            trajetória na saúde, desenvolvi competências em análise, organização
            e resolução de problemas, que agora aplico no aprendizado e prática
            de programação e desenvolvimento de sistemas.
          </p>
          <p>
            🚀 Conhecimentos em <b> HTML, CSS, JavaScript, React e Python.</b>{" "}
          </p>
          <p>🧪 Em constante aprimoramento em QA | testes de software.</p>
        </div>
      </div>
    </section>
  );
}
