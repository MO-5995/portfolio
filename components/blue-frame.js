import styles from "styles/blue-frame.module.css";
import Container from "@/components/container";
import Link from "next/link";

export default function BlueFrame({ children }) {
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>
      <Link href="/work">
        <a className={styles.sideBtn}>Recent Works</a>
      </Link>
    </div>
  );
}
