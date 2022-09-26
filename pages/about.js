import BlueFrame from "@/components/blue-frame";
import Meta from "@/components/meta";
import Container from "@/components/container";
import Hero from "@/components/hero";
import WorkBody from "@/components/work-body";
import Contact from "@/components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import Image from "next/image";
import styles from "styles/about.module.css";

const eyecatch = {
  src: "https://images.microcms-assets.io/assets/7fad38de05fc4dcba30e419a0c5e4625/b638681c71974e91b26187a55a7efb41/icon.png",
  height: 512,
  width: 512,
  blurDataURL: "data:image/png;base64;",
};

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="About me"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About me" />
      <figure style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width:1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <WorkBody>
            <h1>Mai O.</h1>
            <ul className={styles.timeline}>
              <li>
                <p className={styles.date}>
                  May-July,
                  <br className={styles.br} />
                  2019
                </p>
                <div className={styles.content}>
                  <h5 className={styles.title}>
                    オンラインスクールでプログラミングを学ぶ
                  </h5>
                  <p>PHP、HTML5、CSS3、JavaScript、MySQLを学ぶ。</p>
                </div>
              </li>
              <li>
                <p className={styles.date}>Jan,2020</p>
                <div className={styles.content}>
                  <h5 className={styles.title}>エンジニア派遣会社に転職</h5>
                  <p>
                    3ヶ月間Java(Spring
                    Boot)、PostgreSQL、Dockerなどの研修を受け、個人制作やチーム制作を経験。その後お菓子会社のECサイト改修に携わる(Vue.js)
                  </p>
                </div>
              </li>
              <li>
                <p className={styles.date}>April,2021</p>
                <div className={styles.content}>
                  <h5 className={styles.title}>Shopifyのコンサル会社に転職</h5>
                  <p>
                    Shopifyの有料テーマをベースにHTML、CSS、JavaScript、Liquid(RubyベースのShopify言語)を用いたコーディングに携わる
                  </p>
                </div>
              </li>
            </ul>
            <p>
              UIデザインを独学で学んでおり、将来的にはデザインに強いフロントエンドエンジニアになることを目標にしています。
            </p>
            <h3>◯ 使用可能言語、フレームワーク</h3>
            <p>
              HTML5/CSS3、JavaScript(React.js)、PHP
              <br />
              Laravel、Next.js
            </p>
            <h3>◯ 使用ツール</h3>
            <p>AdobeXD, Figma, Illustrator</p>
          </WorkBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

About.getLayout = function getLayout(page) {
  return <BlueFrame>{page}</BlueFrame>;
};
