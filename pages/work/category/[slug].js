import { getAllCategories, getAllWorksByCategory } from "lib/api";
import Container from "@/components/container";
import WorkHeader from "@/components/work-header";
import Works from "@/components/works";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default function Category({ name, works }) {
  return (
    <Container>
      <WorkHeader title={name} subtitle="Work Category" />
      <Works works={works} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/work/category/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);
  const works = await getAllWorksByCategory(cat.id);

  for (const work of works) {
    if (!work.hasOwnProperty("eyecatch")) {
      work.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(work.eyecatch.url);
    work.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      name: cat.name,
      works: works,
    },
  };
}
