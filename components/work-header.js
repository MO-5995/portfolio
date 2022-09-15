import styles from "styles/work-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkHeader({ title, subtitle }) {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
