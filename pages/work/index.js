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
