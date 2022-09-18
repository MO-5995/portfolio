import { getWorkBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { prevNextWork } from "lib/prev-nex-post";
import Meta from "@/components/meta";
import Container from "@/components/container";
import WorkHeader from "@/components/work-header";
import WorkBody from "@/components/work-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import ConvertBody from "@/components/convert-body";
import WorkCategories from "@/components/post-categories";
import Pagination from "@/components/pagination";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default function Work({
  title,
  content,
  eyecatch,
  categories,
  description,
  prevWork,
  nextWork,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <WorkHeader title={title} subtitle="Design Work" />
      <figure>
        <Image
          src={eyecatch.url}
          alt=""
          layout="responsive"
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width:1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          blurDataURL={eyecatch.blurDataURL}
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <WorkBody>
            <ConvertBody contentHTML={content} />
          </WorkBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <WorkCategories categories={categories} />
        </TwoColumnSidebar>
      </TwoColumn>
      <Pagination
        prevText={prevWork.title}
        prevUrl={`/work/${prevWork.slug}`}
        nextText={nextWork.title}
        nextUrl={`/work/${nextWork.slug}`}
      />
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs(5);
  return {
    paths: allSlugs.map(({ slug }) => `/work/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const work = await getWorkBySlug(slug);
  if (!work) {
    return { notFound: true };
  } else {
    const description = extractText(work.content);
    const eyecatch = work.eyecatch ?? eyecatchLocal;
    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;
    const allSlugs = await getAllSlugs();
    const [prevWork, nextWork] = prevNextWork(allSlugs, slug);

    return {
      props: {
        title: work.title,
        content: work.content,
        eyecatch: eyecatch,
        categories: work.categories,
        description: description,
        prevWork: prevWork,
        nextWork: nextWork,
      },
    };
  }
}
