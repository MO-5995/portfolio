import React from "react";
import styles from "styles/hero.module.css";

export default function Hero({ title, subtitle, text, imageOn = false }) {
  return (
    <div className={styles.hero_header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <h3 className={styles.text}>{text}</h3>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
