import React from "react";

export default function Hero({ title, subtitle }) {
  return (
    <div className="t-MV__hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
