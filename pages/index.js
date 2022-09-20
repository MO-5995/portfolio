import Meta from "@/components/meta";
import { getAllWorks } from "lib/api";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Pagination from "@/components/pagination";
import { getPlaiceholder } from "plaiceholder";

import { eyecatchLocal } from "lib/constants";

export default function Home({ works }) {
  return (
    <Container>
      <Meta />
      <Hero
        title="PORTFOLIO"
        subtitle="Markup Engineer"
        text="Mai O."
        imageOn
      />
      <Works works={works} />
      <Pagination nextUrl="/work" nextText="More Works" />
    </Container>
  );
}
export async function getStaticProps() {
  const works = await getAllWorks(4);

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
