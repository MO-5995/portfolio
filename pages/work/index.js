import Meta from "@/components/meta";
import Container from "@/components/container";
import { getAllWorks } from "lib/api";
import Hero from "@/components/hero";
import Works from "@/components/works";

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
  return {
    props: {
      works: works,
    },
  };
}
