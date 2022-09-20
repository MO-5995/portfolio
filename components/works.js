import styles from "styles/works.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Works({ works }) {
  return (
    <div className={styles.gridContainer}>
      {works.map(({ title, slug, eyecatch }) => (
        <article className={styles.work} key={slug}>
          <Link href={`/work/${slug}`}>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="responsive"
                  width={eyecatch.width}
                  height={eyecatch.height}
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
