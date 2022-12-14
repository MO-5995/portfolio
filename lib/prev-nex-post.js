import next from "next";

export function prevNextWork(allSlugs, currentSlug) {
  const numberOfWorks = allSlugs.length;
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevWork =
    index + 1 === numberOfWorks ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextWork = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevWork, nextWork];
}
