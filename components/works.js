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
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
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
