import { getAllCategories } from "lib/api";
import Container from "@/components/container";
import WorkHeader from "@/components/work-header";
import Work from "..";

export default function Category({ name }) {
  return (
    <Container>
      <WorkHeader title={name} subtitle="Work Category" />
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

  return {
    props: {
      name: cat.name,
    },
  };
}
