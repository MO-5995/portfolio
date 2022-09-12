import styles from "styles/work-body.module.css";

export default function WorkBody({ children }) {
  return <div className={styles.stack}>{children}</div>;
}
