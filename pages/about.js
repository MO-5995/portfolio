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
//import eyecatch from "images/icon.png";

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
            <p>
              現在Shopifyの有料テーマをベースにHTML、CSS、JavaScript、liquid(RubyベースのShopify言語)を用いたコーディングに携わっています。
              <br />
              UIデザインを独学で学んでおり、将来的にはデザインに強いフロントエンドエンジニアになることを目標にしています。
            </p>
            <h3>◯使用可能言語、フレームワーク</h3>
            <p>
              HTML5/CSS3、JavaScript(React)、PHP
              <br />
              Laravel、Next.js
            </p>
            <h3>◯使用ツール</h3>
            <p>AdobeXD, Figma, Illustration</p>
          </WorkBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
