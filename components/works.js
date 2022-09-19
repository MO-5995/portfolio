import styles from "styles/works.module.css";
import Link from "next/link";

export default function Works({ works }) {
  return (
    <div className={styles.gridContainer}>
      {works.map(({ title, slug }) => (
        <article className={styles.work} key={slug}>
          <Link href={`/work/${slug}`}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
