import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getWorkBySlug(slug) {
  try {
    const work = await client.get({
      endpoint: "designs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return work.contents[0];
  } catch (err) {
    console.log("--- getPostBySlug ---");
    console.log(err);
  }
}
