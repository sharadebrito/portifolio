import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        <button>
          <a href="#sobre">Sobre</a>
        </button>
        <button>
          <a href="#projetos">Projetos</a>
        </button>
        <button>
          <a href="#contato">Contato</a>
        </button>
      </div>
    </header>
  );
}
