import React from "react";
import styles from "styles/hero.module.css";
import Image from "next/image";
//import topImage from "images/top.jpg";

const topImage = {
  src: "https://images.microcms-assets.io/assets/7fad38de05fc4dcba30e419a0c5e4625/d34f94b696fc4c75950de5fcae704b86/top.jpg",
  height: 853,
  width: 640,
  blurDataURL: "data:image/png;base64;",
};

export default function Hero({ title, subtitle, text, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.hero_header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.text}>{text}</h3>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={topImage}
            alt=""
            layout="responsive"
            sizes="(min-width:1152px) 576px,(min-width:768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
