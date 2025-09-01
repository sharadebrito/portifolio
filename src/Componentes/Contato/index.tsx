import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

export function Contato() {
  return (
    <section id="contato">
    <div className={styles.contatos}>
      <h1>CONTATOS</h1>
      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <a href="mailto:sharadebrito@hotmail.com">
            <MdEmail size={80} color="#ceb63e" className={styles.icon} />
            <p>sharadebrito@hotmail.com</p>
          </a>
        </div>

        <div className={styles.contactItem}>
          <a href="tel:+5531982672417">
            <FaWhatsapp size={80} color="#1EAA61" className={styles.icon} />
            <p>31 9 8267-2417</p>
          </a>
        </div>

        <div className={styles.contactItem}>
          <a
            href="https://www.linkedin.com/in/shara-brito-b36a35359/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={80} color="#0966C2" className={styles.icon} />
            <p>LinkedIn</p>
          </a>
        </div>

        <div className={styles.contactItem}>
          <a
            href="https://github.com/sharadebrito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={80} color="black" className={styles.icon} />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}
