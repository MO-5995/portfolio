import Container from "@/components/container";
import Hero from "@/components/hero";
import WorkBody from "@/components/work-body";
import Contact from "@/components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About me" />
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
