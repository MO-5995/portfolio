import Meta from "@/components/meta";
import Container from "@/components/container";
import { getAllWorks } from "lib/api";
import Hero from "@/components/hero";
import Works from "@/components/works";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default function Work({ works }) {
  return (
    <Container>
      <Meta pageTitle="work" pageDesc="work list" />
      <Hero title="Work" subtitle="Recent works" />
      <p
        style={{ fontSize: "18px", fontWeight: "600", color: "var(--gray-25)" }}
      >
        独学で作成したUIデザインの一部です。
        <br />
        <a
          style={{ textDecoration: "underline" }}
          href="https://cocoda.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cocoda
        </a>
        で提供されていたUIデザインの課題に取り組みました。（現在課題提供サービスは終了）
      </p>
      <Works works={works} />
    </Container>
  );
}

export async function getStaticProps() {
  const works = await getAllWorks();

  for (const work of works) {
    if (!work.hasOwnProperty("eyecatch")) {
      work.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(work.eyecatch.url);
    work.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      works: works,
    },
  };
}
