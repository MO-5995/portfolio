import React from "react";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className="t-MV__hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
